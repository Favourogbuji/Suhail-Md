const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347034169269";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_51_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICA3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY2LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTczLFxuICAgICAgICA0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDc3LFxuICAgICAgICA3LFxuICAgICAgICA5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICA5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NixcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlUcC82RTdJTFY1clZlL0tOcVozdWI3dm1PeDRJcEp0ZTB3aS9Xd3krMGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZYQWprV1FGUXotdEtacWEyRWtMRndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWQ1NThkYWQtOWI4ZC00NGU4LWJkYzAtM2I5Nzc3YmFkODcxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDE4MixcbiAgICAgIDQsXG4gICAgICA3OSxcbiAgICAgIDIyOCxcbiAgICAgIDE1MyxcbiAgICAgIDEzOSxcbiAgICAgIDE5LFxuICAgICAgMTAyLFxuICAgICAgMjE0LFxuICAgICAgMjM1LFxuICAgICAgOTcsXG4gICAgICAxOTksXG4gICAgICAyNTAsXG4gICAgICAyNTEsXG4gICAgICAyMjMsXG4gICAgICAxMjcsXG4gICAgICA5MCxcbiAgICAgIDEzNyxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjYsXG4gICAgICA0LFxuICAgICAgNjQsXG4gICAgICAyMDcsXG4gICAgICA4LFxuICAgICAgNTIsXG4gICAgICA2MSxcbiAgICAgIDIwLFxuICAgICAgMTUsXG4gICAgICA5MixcbiAgICAgIDE3MixcbiAgICAgIDU5LFxuICAgICAgMTU0LFxuICAgICAgMTE4LFxuICAgICAgNjgsXG4gICAgICAxNTAsXG4gICAgICAxNjIsXG4gICAgICAyMDksXG4gICAgICAxNjUsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxNVFESlBMMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzNDE2OTI2OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4OTMyMjg3MTExMTc2NDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ticDE3b0RFTUtUMExNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVjkyYmRPM1RaR3M0YjBxekFJUmh3d0I0L3pIR0JQYS9oN1NsVWxpSUlVTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVd3lmeER4WFRwVCtqWXVnbkJhWjV4N2dhWEd6bTYwcWZrSElGZ05jb1lIYlcrM3NINy9ZSFAwQ3J1WG9RRzFpRFU0Qml0c3FyaVlCNUJKMExTU2dBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHa3R4QW9OWFlmN05KVDUzbWlMWGVhV2Q2M3hHRTVzN0N5bU44OVdzYTRZd21pK1lORy9xSDNMV1pjb3hTaURGQ21MZllGcWVka0E5TURRejI2Kzdpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM0MTY5MjY5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4ODA3MTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFTWhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVNaC5qc29uIjogIntcImtleURhdGFcIjpcIlI0VnduTEVVWUYxOGpGbjBzV0xYZGxWelE1UnQ0UythOVFpd0dldFhOdFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTI4MzgwMDY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
