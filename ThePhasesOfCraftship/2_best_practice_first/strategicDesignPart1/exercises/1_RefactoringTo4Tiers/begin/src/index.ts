import server from "./bootstrap";
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

server.strart(port);
