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
const { exec } = require('node:child_process')


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

var dados = []
exec('python buscador.py', (erro, str) => {
  if (erro) {
      console.error("erro: ", erro)
      return 
  }

  let str_a = str.split("'*',")
  function listinha(str){
  if(str[-1] = ' '){var ind_f = -3}else{var ind_f = -2}
  str = str.slice(2, ind_f)
  lista = str.split(',')
  listaf = Array()
  for(let i in lista) {
      lista[i] = lista[i].replace(' ', '')
      lista[i] = lista[i].replace("'", '')
      lista[i] = lista[i].replace('[', '')
      lista[i] = lista[i].replace(']', '')
      lista[i] = lista[i].replace("'", '')
      listaf.push(lista[i])
  }
  return listaf
  }
  var lista_a = Array()
  for(var i in str_a){
      lista_a.push(listinha(str_a[i]))
      
  }
  var lista_final = Array()
  for(var k = 1; lista_a.length >= k; ++k){
      var lista_p = new Array()
      var listinha = lista_a[k-1]
      for(var sla_y = 1; listinha.length >=sla_y; ++sla_y){
          lista_p.push(listinha[sla_y-1])
          
      }
      lista_final.push(lista_p)
  }
  var lista_filtro = new Array()
  for(var k = 1; lista_final.length >= k; ++k){
    if(lista_final[k-1].length > 1){
      lista_filtro.push(lista_final[k-1])
    }
  }
  dados = lista_filtro
})

var x = [['"lucineia pereira de paula"', 'eduardofaland@gmail.com', ['http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx?link=%2f2022%2fexecutivo+secao+ii%2fsetembro%2f17%2fpag_0038_40216fc28fbc65eb50010603475e29e3.pdf&pagina=38&data=17/09/2022&caderno=ExecutivoII&paginaordenacao=100038']]]

app.get("/pdf_inf", (req, resp) => {
      resp.send(dados);
});


app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
