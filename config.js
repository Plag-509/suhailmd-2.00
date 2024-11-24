const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/96nhs0.jpeg" || "https://files.catbox.moe/96nhs0.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 亗ŞΔҜΔŦΔ ǤƗŇŦØҜƗ♜♰" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50942561123";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_39_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAzNixcbiAgICAgICAgODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICA4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjExLFxuICAgICAgICA2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJucHZNbzhmYzdSc2pTQlBRUWRCVElXcGpDYkRtL2EyeE5TaUVDUFpuWlFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHd0Z4ZHBRalMxZU9BbWJPTXRUdmFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImExNjE2YWI2LWMyZDgtNDRkMC1hMDdjLWVmNzVkMDcxODA1ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDI0NyxcbiAgICAgIDI1LFxuICAgICAgMjQ0LFxuICAgICAgMTU2LFxuICAgICAgNDUsXG4gICAgICAxMTAsXG4gICAgICAxODIsXG4gICAgICA2NSxcbiAgICAgIDE5MyxcbiAgICAgIDI1MSxcbiAgICAgIDE2NCxcbiAgICAgIDIzOSxcbiAgICAgIDc5LFxuICAgICAgNzgsXG4gICAgICAxNzgsXG4gICAgICAxMjgsXG4gICAgICA1MixcbiAgICAgIDI0MixcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMjQ1LFxuICAgICAgMjIyLFxuICAgICAgMTQwLFxuICAgICAgMTg3LFxuICAgICAgMjE4LFxuICAgICAgMzUsXG4gICAgICAxMDEsXG4gICAgICAxNjAsXG4gICAgICAyMTQsXG4gICAgICAxODUsXG4gICAgICAyMDksXG4gICAgICAxMzcsXG4gICAgICAxMDUsXG4gICAgICAxOTcsXG4gICAgICA2OSxcbiAgICAgIDMwLFxuICAgICAgNSxcbiAgICAgIDQyLFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1GNVpEQzNRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0MjU2MTEyMzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI1NDkwMjEyMjYyMTAzOjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091bTB2d0dFSlN6aWJvR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMkFORkdHYWRGS0ZjdjRYWW8xSWhwMGpGTkJiVHVqT01SSnZCLzNiakJIOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxd2w3bFVsa3RES2hkRDFzNzZiWUpCTTEzZmRiZzJxQXd0ZkxmeGdrTlpXdkQ5TVA1bWhsS1dUcEdkWjhUVjd6bFRXU3VaRlZWMVJ5R2FWQzVCd3NBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3djNLcTNEWEQ1ZFFnQ3R6OEFYZ3dOVmVkYzdIeHVJaEZ4cEhpclpaSWNlaHZIdXBvTkorL3g4SUVwZGVoQk5QaTBObURsaEFCeFFqM0daT1hKNldDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0MjU2MTEyMzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjQwMTU2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpWdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlZ0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibmFnNzNOR3AyeGRnOTRqa1grQWJKaHVGQWVzeFh1Zk1RODE2SjV2WjY2dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODcyMDA4MDQzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "亗ŞΔҜΔŦΔ ǤƗŇŦØҜƗ♜♰-XMD",
  ownername:process.env.OWNER_NAME|| "亗ŞΔҜΔŦΔ ǤƗŇŦØҜƗ♜♰",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
