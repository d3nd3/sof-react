import {Servers, Server} from './types'

const FIELD_NAMES: string[] = ["ip","gamespyport","hostport","hostname","mapname","gametype","numplayers","maxplayers","violence","timelimit","fraglimit","dmflags","movescale","cheats","ctf_loops","suicide_penalty","country","last_update_success","last_update_attempt"]
function serverListToObject(data:string) : Servers {

  console.assert(typeof data == "string", "data passed to serverListToObject not string")
  let servers : Servers = {};

  // console.log(" data orig : " , data);
  const all_servers = data.split("\n").slice(1);
  // console.log("here: ",all_servers)
  for (const a_server of all_servers) {
    const fields = a_server.split("\\");
    const s:Server = fields.reduce((acc: { [key: string]: string|number }, value: string|number, index: number) => {
      acc[FIELD_NAMES[index]] = value;
      return acc;
    }, {}) as Server;

    servers[s.ip + ":" + s.hostport] = s;
  }
  return servers;
}


export {serverListToObject}