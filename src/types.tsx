export type Server =  {
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

export type Servers = {
  [key: string]: Server
};

