import express, { Request, Response } from 'express';

const app = express();

app.post('/ping', (req: Request, res: Response) => {
  res.send('Pong !!');
});

export default app;
