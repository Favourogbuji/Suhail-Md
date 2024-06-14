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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_08_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NixcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDg5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg0LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwielYyK1MvQkkzTTdsT3FPQXlVT2lHRkJwUkE0S2RqN0dYYVdJZE96SkxvUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU1liMmZRWWFUMlNIaVJtQ2F5aVdYZ1wiLFxuICBcInBob25lSWRcIjogXCI3NDU1MWIwZS0wZTA5LTQ5NzEtOTI4NC1lMmFkMjVlYjVhNTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMTU4LFxuICAgICAgMTQ2LFxuICAgICAgNjIsXG4gICAgICAxNTMsXG4gICAgICAxMjYsXG4gICAgICAxOTIsXG4gICAgICAyOSxcbiAgICAgIDIxNCxcbiAgICAgIDcwLFxuICAgICAgODMsXG4gICAgICAzMCxcbiAgICAgIDUsXG4gICAgICAxMDgsXG4gICAgICAxMDEsXG4gICAgICAxMzMsXG4gICAgICAyNixcbiAgICAgIDIwMyxcbiAgICAgIDI0MCxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAyNTEsXG4gICAgICAxMTksXG4gICAgICAyMTcsXG4gICAgICA1OSxcbiAgICAgIDEyLFxuICAgICAgNTAsXG4gICAgICAxNjcsXG4gICAgICAxMzYsXG4gICAgICAxNDgsXG4gICAgICA2OCxcbiAgICAgIDE3MixcbiAgICAgIDEyLFxuICAgICAgODAsXG4gICAgICA2NSxcbiAgICAgIDQ3LFxuICAgICAgMzEsXG4gICAgICAxNzMsXG4gICAgICAxMDcsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQUZCUEw3R0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzQxNjkyNjk6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODkzMjI4NzExMTE3NjQ6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLWHAxN29ERU8rNXNiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlY5MmJkTzNUWkdzNGIwcXpBSVJod3dCNC96SEdCUGEvaDdTbFVsaUlJVU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicWJzRit4aUtPb2hTZUVpQ3NOUk9SUmcyczFJUVYxNXpkMGs0dHNxbUFWOXp6RnRESTJocGkwMUNRMkcyQWhxdXdpUEhERHMwNWtjL3lJSDRGWTFIQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYmZycC9rTkwvR0piSWpzUWNaOWkyaUxCMGtXSlJMMFUvWFhRQkRpMU9RMDdSNkpmMmQwZ2djRFVleG9aTnEvTlNXNkt2VWl1VitLT1BDY0k0ZGl0RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzNDE2OTI2OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Mzc3NzE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRU1oXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSNFZ3bkxFVVlGMThqRm4wc1dMWGRsVnpRNVJ0NFMrYTlRaXdHZXRYTnRZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkyODM4MDA2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
