import express from "express";
import { AppController } from "./app.controller";
const cors = require("cors");

export class Server {
  private app: express.Application;

  constructor(private routes: Record<string, AppController>) {
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  setupMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  setupRoutes() {
    for (const route in this.routes) {
      this.app.use(route, this.routes[route].router);
    }
  }

  strart(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
