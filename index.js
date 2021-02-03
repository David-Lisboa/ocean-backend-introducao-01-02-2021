const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = 3000;

/*
Create, Read (All/Single), Update & Delete
Criar, Ler (Tudo ou Individual), Atualizar e Remover
*/

const mensagens = [
  "Primeira mensagem",
  "Segunda mensagem"
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Ler Tudo (Read All)
app.get('/mensagens', (req, res) => {
  res.send(mensagens);
});

// Ler Individual (Read Single)
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;

  if (id >= mensagens.length) {
    res.send(`Mensagem ${id + 1} não existe`);
  } else {
    const mensagem = mensagens[id];

    res.send(mensagem)
  };
});


// Atualizar(Update)
app.put('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;

  const mensagem = req.body.texto;

  mensagens[id] = mensagem;
  
  res.send('mensagem atualizada com sucesso.');
});

// Criar (Create)
app.post('/mensagens', (req, res) => {
  const mensagem = req.body.texto;

  mensagens.push(mensagem);

  res.send('Mensagem criada com sucesso.');
});

app.listen(port, () => {
  console.info('Servidor rodando em http://localhost:' + port);
});