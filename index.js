const express = require('express')
const app = express()

const port = 3000;

const mensagens = [
  "primeira mensagem",
  "Segunda mensagem"
];

app.get('/', (req, res) => {
    res.send('Hello World!');
  })

app.get('/mensagens', (req, res) => {
    res.send(mensagens)
  });

app.listen(port, ()=>{
  console.info('Servidor rodando em http://localhost:'+ port);
});
