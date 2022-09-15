async function connect(){
  if(global.connection && global.connection.state !== "disconnected")
  return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection("mysql://root:fatec@localhost:3306/cadastro");
  global.connection = connection;
  return connection;
}

async function insert_fun(nome,email,cpf,nas_data,tel_fixo,tel_celular,cep,numero,rua,bairro,cidade,estado,complemento){
  const con = await connect();
  con.query(`insert into funcionario(nome,email,cpf,nas_data,tel_fixo,tel_celular,cep,numero,rua,bairro,cidade,estado,complemento)
  values ('${nome}','${email}','${cpf}','${nas_data}','${tel_fixo}','${tel_celular}','${cep}','${numero}','${rua}','${bairro}','${cidade}','${estado}','${complemento}');`)
}

async function insert_esc(escolas,cpf){
  for (k in escolas){
    const escola = escolas[k].escolas.toUpperCase()
    const con = await connect();
    var [rows] = await con.query(`select esc_cod from escolas where escola like "%${escola}";`)
    rows = rows[0]

    if (rows == undefined){
      con.query(`insert into escolas(escola) values ("${escola}");`);
      var [rows] = await con.query(`select esc_cod from escolas where escola like "%${escola}";`)
      rows = rows[0]
    }
    var {esc_cod} = rows

    var [rows] = await con.query(`select fun_cod from funcionario where cpf like "%${cpf}";`)
    rows = rows[0]
    var fun_cod = rows.fun_cod

    con.query(`insert into emprego(fun_cod,esc_cod) values (${fun_cod},${esc_cod});`);
  }
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
  const { escolas } = req.body;

  const dia = nas_data.substring(0,2)
  const mes = nas_data.substring(3,5)
  const ano = nas_data.substring(6,)
  var nas_data = ano + '-' + mes + '-' + dia

  insert_fun(nome,email,cpf,nas_data,tel_fixo,tel_celular,cep,numero,rua,bairro,cidade,estado,complemento)
  insert_esc(escolas,cpf)
});


app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
