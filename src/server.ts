import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();



app.get('/', (req, res) => {
  return res.json({ message: "Hello Word - NLW#4" })
});

app.post('/', (req, res) => {
  return res.json({ message: "Os dados foram salvos com sucesso - NLW#4" })
});



app.listen(3333, () => console.log('Server is Running, PORT 3333'));
