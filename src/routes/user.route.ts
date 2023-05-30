import express from 'express';
import { UserService } from '../services';

export class UserRoute {
  public router: express.Router;
  private userService: UserService;
  constructor() {
    this.router = express.Router();
    this.userService = new UserService();
    this.load();
  }

  private load() {
    this.router.get('/', this.test.bind(this));
  }

  private test(_: express.Request, res: express.Response) {
    const data = this.userService.get();
    res.json({
      data,
    });
  }
}
