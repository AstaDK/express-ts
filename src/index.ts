import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
dotenv.config();

const app: Express = express();
app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms - [:date[clf]] - ":user-agent"'
  )
);

const port = process.env.PORT;

app.get('/', (_, res: Response) => {
  res.send('Welcome API');
});

app.listen(port, () => {
  console.log(`🚀 [Server] is running at http://localhost:${port}`);
});
