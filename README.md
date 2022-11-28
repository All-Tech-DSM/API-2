<div align="center" id="menu">

![logo_transparent](https://user-images.githubusercontent.com/100284976/204163666-80fa9d66-1823-4ce7-9c60-92e04c3cf33c.png)

<h3> Desenvolvimento de Aplicação Web Simples, FrontEnd Básico, com Persistência em BD Relacional </h3>

<p> 
    <a href="#userstory">User Story</a> | 
    <a href="#mockup">Mockup</a> |
    <a href="#exe">Execução</a> |
    <a href="#modelo">Modelos</a> |
    <a href="#burndown">Burndown</a> |
    <a href="#manual">Manual</a>
</p>

<br>

<h4 align="center"> Durante essa quarta e última sprint o foco foi a automação do envio de e-mails automático e melhoria do relatório diário (destaque de prazos, caso haja prazos). </h4>

</div>

<span id="userstory">  

## :dart: User Story 
<div align="center">

![us_sprint4](https://user-images.githubusercontent.com/100284976/204103498-984fbc73-8cc1-4ae9-a193-4e6438c50add.png)
</div>

<br>

O User Story faz referência aos requisitos: RF8, RNF1, RNF2 e RNF3. 
Confira abaixo a descrição de cada um.

* RF8: Automação do envio de e-mails
* RNF1: Linguagem Node.js
* RNF2:	Programação em TypeScript e JavaScript
* RNF3:	Banco de Dados Relacional (MySQL)

<span id="mockup"> 

## :desktop_computer: Mockup

Como parte do planejamento do projeto foi criado o mockup para idealização do layout, foi validado pelo cliente para assim ser aplicado na interface.

<br>
<div align="center ">

![mockup_sprint4](https://user-images.githubusercontent.com/100284976/204103656-be780f67-0aca-4323-aaa6-b2be6ad03d8d.png)

</div>
<a href="#menu"> -> Voltar ao menu</a>

<span id="exe">

## :film_strip: Execução

https://user-images.githubusercontent.com/100284976/204167094-0be6fcaa-3d0e-4d73-9952-59f4c66055f2.mp4


<span id="modelo"> 

## :bookmark_tabs: Modelos de Banco de Dados

Modificamos o banco de dados para fazer o armazenamento dos trechos.

<div align="center ">

### Modelo Conceitual

![der](https://user-images.githubusercontent.com/100284976/204176588-236ffc8b-6f26-43b2-b95a-3f74db2223e8.jpeg)

### Modelo Lógico

![mer](https://user-images.githubusercontent.com/100284976/204176600-219ce867-2b97-479a-8e9d-787c13cd92c9.jpeg)

</div>

<a href="#menu"> -> Voltar ao menu</a>

<span id="burndown">

## :chart_with_downwards_trend: Burndown

Para acompanhar as atividades, foi criado e atualizado pelo Scrum Master, um gráfico de burndown onde podemos visualizar de forma tangivel os esforços de tempo e a progressão ao longo dos dias da sprint. Realizamos 27 horas e 20 minutos a mais do esperado, que era 41 horas e meia.

<br>
<div align="center">

![burndown_s4](https://user-images.githubusercontent.com/100284976/204166372-6000e581-fbe1-431e-808d-f45cb9ad80d4.png)

</div>

<br>

<span id="manual">

 ## :scroll: Manual - Como Rodar

* É necessário ter o Node.js, MySQL, Python(versão 3.10 ou maior),  Visual Studio Code e o Git instalado na máquina.

* Caso não tenha-os, instale pelo https://nodejs.org/en/, https://dev.mysql.com, https://www.python.org/downloads/, https://code.visualstudio.com/Download e https://git-scm.com/downloads

* Crie uma pasta, abra o cmd e digite: git clone https://github.com/All-Tech-DSM/API-2.git

* Abra o MySQL e execute o arquivo `script.sql` 

* Abra a pasta 📂 `API-2` no VS Code;

* Em seguida acesse a pasta 📂 server e abra o arquivo `index.js`;

* Vá na linha 06 e configure a rota de seu MySQL;

* Em seguida, salve o arquivo e feche-o;

* Abre o arquivo “buscador.py” e configure os dados do MySQL na linha 11;

* Ainda na pasta 📂 `server` abra o cmd e digite: npm install;

* Em seguida, digite o comando pip install -r req.txt;

* Após a instalação, digite: node index.js;

* Crie outro terminal e entre na pasta 📂 `server`:

* Digite: python app.py;

* Abra um novo terminal e volte para 📂 `API-2`;

* Em seguida vá à pasta 📂 `script`, abra o cmd;

* Digite: npm install;

* Em seguida, digite: npm start;

* A página já estará estanciada em sua localhost.
  

<a href="#menu"> -> Voltar ao menu</a>
