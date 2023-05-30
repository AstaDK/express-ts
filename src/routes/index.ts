import express from 'express';
import { UserRoute } from './user.route';

export class BaseRoute {
  public router: express.Router;
  private userRoute: UserRoute;
  constructor() {
    this.router = express.Router();
    this.userRoute = new UserRoute();
    this.load();
  }

  private load() {
    this.router.use('/users', this.userRoute.router);
  }
}
