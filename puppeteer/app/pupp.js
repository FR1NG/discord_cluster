import cp from 'child_process'
import  WebSocket from 'ws';
import * as dotenv from 'dotenv' 
dotenv.config()

const exampleSocket = new WebSocket("wss://gateway.discord.gg/?encoding=json&v=9");
exampleSocket.onopen = (event) => {
exampleSocket.send(`{"op":2,"d":{"token":"${process.env.SOCKET_TOKEN}","capabilities":4093,"properties":{"os":"Mac OS X","browser":"Chrome","device":"","system_locale":"en-US","browser_user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36","browser_version":"108.0.0.0","os_version":"10.14.6","referrer":"https://discord.com/","referring_domain":"discord.com","referrer_current":"","referring_domain_current":"","release_channel":"stable","client_build_number":175117,"client_event_source":null},"presence":{"status":"online","since":0,"activities":[],"afk":false},"compress":false,"client_state":{"guild_versions":{},"highest_last_message_id":"0","read_state_version":0,"user_guild_settings_version":-1,"user_settings_version":-1,"private_channels_version":"0","api_code_version":0}}}`);

}

const commands = {
  "/e1": ["proc.js"],
  "/e2": ["proc1.js"],
  "/map": ["proc.js", "proc1.js"]
}

exampleSocket.onmessage = async(event) => {
  const msg = JSON.parse(event.data);
  if (msg.t === "MESSAGE_CREATE" && commands. && msg.d.channel_id == "1075395619570589826")
  {
    if (msg.d.content == "/e1")
      cp.fork('proc.js')
    else if (msg.d.content == "/e2")
      cp.fork('proc1.js')
    else if (msg.d.content == "/map")
    {
      cp.fork('proc.js')
      cp.fork('proc1.js')
    }
    console.log("exit")
    process.exit(0);
  }
}
