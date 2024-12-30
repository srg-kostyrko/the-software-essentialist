import express from "express";
import { ErrorHandler } from "./error-handler";

export abstract class AppController {
  private _router: express.Router;
  constructor(private errorHandler: ErrorHandler) {
    this._router = express.Router();
    this._router.use(this.errorHandler);
    this.setupRoutes();
  }

  get router() {
    return this._router;
  }

  createRouteHandler(
    handler: (req: express.Request, res: express.Response) => Promise<void>
  ) {
    return async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        await handler(req, res);
      } catch (error) {
        next(error);
      }
    };
  }

  abstract setupRoutes(): void;
}
