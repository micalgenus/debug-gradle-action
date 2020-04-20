import * as express from 'express';

const app = express();

app.post('/ping', (req: express.Request, res: express.Response) => {
  res.send('Pong !!');
});

export default app;
