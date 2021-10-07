const express = require("express");
const app = express();

app.use(express.json());

let id = 0;
let clientes = [];

//método get para obter a lista de clientes
app.get("/cliente", (req, res, next) => {
  res.send(clientes);
});

//método put para inserir clientes
app.put("/cliente", (req, res, next) => {
  const cliente = {
    id: (id += 1),
    nome: req.body.nome,
    endereco: req.body.endereco,
    cidade: req.body.cidade,
  };
  clientes.push(cliente);
  res.status(201).json(clientes);
});

//método post para atualizar algum cliente
app.post("/cliente", (req, res, next) => {
  clientes.forEach((cliente) => {
    if (cliente.id === req.body.id) {
      (cliente.nome = req.body.nome),
        (cliente.endereco = req.body.endereco),
        (cliente.cidade = req.body.cidade);
    }
  });
  res.status(200).json(clientes);
});

//método delete para excluir algum cliente da lista
app.delete("/cliente/:id", (req, res, next) => {
  const idClienteDel = req.params.id;
  clientes.forEach((cliente, index) => {
    if (cliente.id == idClienteDel) clientes.splice(index, 1);
  });
  res.sendStatus(200);
});

//porta
app.listen(4000, () => {
  console.log("Utilizando a porta 4000. ");
});
