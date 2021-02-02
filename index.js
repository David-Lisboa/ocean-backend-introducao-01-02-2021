const express = require('express')
const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/mensagens', (req, res) => {
    res.send('Exibir todas as mensagens.')
    console.info('Servidor rodando em http://localhost:'+ port)
  })

app.listen(3000)
