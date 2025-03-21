const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Array para simular o banco de dados
let clientes = [
  { id: 1, nome: 'João da Silva', email: 'joao@email.com', sexo: 'M' },
  { id: 2, nome: 'Maria Souza', email: 'maria@email.com', sexo: 'F' },
];

// Rota para obter todos os clientes (GET)
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

// Rota para obter um cliente por ID (GET)
app.get('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (!cliente) return res.status(404).send('Cliente não encontrado.');
  res.status(200).json(cliente);
});

// Rota para criar um novo cliente (POST)
app.post('/clientes', (req, res) => {
  const cliente = {
    id: clientes.length + 1,
    nome: req.body.nome,
    email: req.body.email,
    sexo: req.body.sexo,
  };
  clientes.push(cliente);
  res.status(201).json(cliente);
});

// Rota para atualizar um cliente por ID (PUT)
app.put('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (!cliente) return res.status(404).send('Cliente não encontrado.');

  cliente.nome = req.body.nome || cliente.nome;
  cliente.email = req.body.email || cliente.email;

  res.json(cliente);
});

// Rota para deletar um cliente por ID (DELETE)
app.delete('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (!cliente) return res.status(404).send('Cliente não encontrado.');

  clientes = clientes.filter(c => c.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Middleware para rotas não encontradas
app.use((req, res, next) => {
  res.status(404).json({ mensagem: 'Rota não encontrada' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API ouvindo na porta ${port}`);
});