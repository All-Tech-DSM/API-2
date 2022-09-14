async function connect(){
  if(global.connection && global.connection.state !== "disconnected")
  return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection("mysql://root:fatec@localhost:3306/cadastro");
  global.connection = connection;
  return connection;
}

async function insert(nome,email,cpf,nas_data,tel_fixo,tel_celular,cep,numero,rua,bairro,cidade,estado,complemento){
  const con = await connect();
  con.query(`insert into funcionario(nome,email,cpf,nas_data,tel_fixo,tel_celular,cep,numero,rua,bairro,cidade,estado,complemento)
  values ('${nome}','${email}','${cpf}','${nas_data}','${tel_fixo}','${tel_celular}','${cep}','${numero}','${rua}','${bairro}','${cidade}','${estado}','${complemento}');`)
}

const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { nome } = req.body;
  const { email } = req.body;
  const { cpf } = req.body;
  var { nas_data } = req.body;
  const { tel_fixo } = req.body;
  const { tel_celular } = req.body;
  const { cep } = req.body;
  const { numero } = req.body;
  const { rua } = req.body;
  const { bairro } = req.body;
  const { cidade } = req.body;
  const { estado } = req.body;
  const { complemento } = req.body;

  const dia = nas_data.substring(0,2)
  const mes = nas_data.substring(3,5)
  const ano = nas_data.substring(6,)
  var nas_data = ano + '-' + mes + '-' + dia

  insert(nome,email,cpf,nas_data,tel_fixo,tel_celular,cep,numero,rua,bairro,cidade,estado,complemento)
});


app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
