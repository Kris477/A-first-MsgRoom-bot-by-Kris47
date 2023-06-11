import Client from "msgroom";

const client = new Client("Kris47bot", [ "!" ]);
client.commands.ping = () => "pong";
await client.connect();
