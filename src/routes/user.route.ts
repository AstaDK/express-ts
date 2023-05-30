import express from 'express';

export class UserRoute {
  public router: express.Router;
  constructor() {
    this.router = express.Router();
    this.load();
  }

  private load() {
    this.router.get('/', this.test.bind(this));
  }

  private test(_: express.Request, res: express.Response) {
    res.json({ success: true });
  }
}
