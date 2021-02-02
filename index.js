const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());

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

app.post('/mensagens,', (req, res) =>{
  res.send(req.body.texto)
} );

app.listen(port, ()=>{
  console.info('Servidor rodando em http://localhost:'+ port);
});
