import express from 'express';
const port = 8000;

const app: express.Express = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('HELLO FROM EXPRESS + TS!!!!');
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
