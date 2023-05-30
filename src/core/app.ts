import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { BaseRoute } from '../routes';
export class App {
  private app: express.Express;
  private port: string;
  private baseRoute: BaseRoute;

  constructor() {
    this.app = express();
    this.port = process.env.PORT as string;
    this.baseRoute = new BaseRoute();

    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureMiddleware(): void {
    this.app.use(cors());
    this.app.use(helmet({ crossOriginResourcePolicy: false }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      morgan(
        ':method :url :status :res[content-length] - :response-time ms - [:date[clf]] - ":user-agent"'
      )
    );
  }

  private configureRoutes(): void {
    this.app.use('/api/v1', this.baseRoute.router);
    this.app.get('/', (_, res: express.Response) => {
      res.send('Welcome API');
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 [Server] is running at http://localhost:${this.port}`);
    });
  }
}
