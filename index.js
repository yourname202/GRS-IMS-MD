// =========HELLO FRIAND=========
require('./system/config')

const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  makeInMemoryStore,
  jidDecode
} = require("@whiskeysockets/baileys")

const pino = require("pino")
const { Boom } = require("@hapi/boom")
const chalk = require("chalk")
const { smsg } = require("./system/lib/myfunction")

// ========= PARAMÈTRES =========
const PHONE_NUMBER = "243XXXXXXXXX" // ← TON NUMÉRO WHATSAPP (sans +)
const usePairingCode = true

// ========= STORE =========
const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" })
})

// ========= START BOT =========
async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("./session")

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    auth: state,
    printQRInTerminal: false,
    browser: ["Ubuntu", "Chrome", "20.0.04"]
  })

  store.bind(sock.ev)
  sock.ev.on("creds.update", saveCreds)

  // ========= PAIRING CODE =========
  if (usePairingCode && !state.creds.registered) {
    console.log(chalk.cyan("🔗 Pairing WhatsApp en cours..."))
    const code = await sock.requestPairingCode(PHONE_NUMBER)
    console.log(chalk.green("📲 CODE DE CONNEXION :"), chalk.bold(code))
  }

  // ========= CONNEXION =========
  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update

    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode

      console.log(chalk.red("❌ Déconnexion :", reason))

      if (reason !== DisconnectReason.loggedOut) {
        startBot()
      }
    }

    if (connection === "open") {
      console.log(chalk.green.bold("✅ WhatsApp connecté avec succès !"))
    }
  })

  // ========= MESSAGES =========
  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    if (type !== "notify") return

    const msg = messages[0]
    if (!msg?.message) return
    if (msg.key.remoteJid === "status@broadcast") return

    const m = smsg(sock, msg, store)
    require("./system/Zyy")(sock, m, msg, store)
  })

  // ========= UTILS =========
  sock.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
      const decode = jidDecode(jid) || {}
      return decode.user && decode.server
        ? decode.user + "@" + decode.server
        : jid
    }
    return jid
  }

  sock.sendText = (jid, text, quoted = "", options = {}) =>
    sock.sendMessage(jid, { text, ...options }, { quoted })

  return sock
}

// ========= ASCII =========
console.log(chalk.green.bold(`
━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 LukasCrasher BOT
Powered by DanzzOffc
━━━━━━━━━━━━━━━━━━━━━━━━━━
`))

// ========= RUN =========
startBot()

