type Server =  {
  ip: string,
  gamespyport: number,
  hostport: number,
  hostname: string,
  mapname: string,
  gametype: string,
  numplayers: number,
  maxplayers: number,
  violence: number,
  timelimit: number,
  fraglimit: number,
  dmflags: number,
  movescale: number,
  cheats: number,
  ctf_loops: number,
  suicide_penalty: number,
  country: string,
  last_update_success: string,
  last_update_attempt: string
};
const FIELD_NAMES = ["ip","gamespyport","hostport","hostname","mapname","gametype","numplayers","maxplayers","violence","timelimit","fraglimit","dmflags","movescale","cheats","ctf_loops","suicide_penalty","country","last_update_success","last_update_attempt"]
export default function serverListToJson(data) {

  servers = {};

  const lines = input.split("\n");
  for (const line of lines) {
    const fields = line.split("\\");
    const s = fields.reduce((acc, value, index) => {
      acc[FIELD_NAMES[index]] = value;
      return acc;
    }, {});

    servers[s.ip + ":" + s.hostport] = s;
  }
  return servers;
}
