<div align="center" id="menu">
<img src="img/logo_transparent.png"/></div>
<h3 align="center"> Desenvolvimento de Aplicação Web Simples, FrontEnd Básico, com Persistência em BD Relacional </h3>

<p align="center"> 
    <a href="#userstory">User Story</a> | 
    <a href="#mockup">Mockup</a> |
    <a href="#exe">Execução</a> |
    <a href="#modelo">Modelos</a> |
    <a href="#burndown">Burndown</a> |
    <a href="#manual">Manual</a>

</p>

<br>

<h4 align="center"> Os objetivos para a primeira sprint foram o cadastro dos associados e a mostragem de dados feita através da raspagem.  </h4>

<span id="userstory">  

## :dart: User Story 

<div align="center"> 
<img src="img/us_sprint11.png" width="700"/>
<img src="img/us_sprint12.png" width="700"/>
<img src="img/us_sprint13.png" width="700"/>
</div>
<br>

O User Story faz referência aos requisitos: RF2 RF3 RNF1 RNF2 RNF3. 
Confira abaixo a descrição de cada um.

* RF1: Cadastro dos associados
* RF2: Raspagem de dados (leitor)
* RF3: Consultas de dados
* RF4: Automação do download e da exclusão dos pdf's
* RNF1	Linguagem Node.js
* RNF2	Programação em TypeScript e JavaScript
* RNF3	Banco de Dados Relacional (MySQL)

<a href="#menu"> -> Voltar ao menu</a>

<span id="mockup"> 

## :desktop_computer: Mockup

Como parte do planejamento do projeto foram criado os mockup's para idealização do layout e validado pelo cliente para assim ser aplicado na interface.

<br>
<div align="center ">

### Tela de Cadastro
<img src="img/mockup_cadastro.png" width="700"/>

### Tela de Consulta
<img src="img/mockup_consulta.png" width="700"/>
</div>

<a href="#menu"> -> Voltar ao menu</a>

<span id="exe"> 

## :film_strip: Execução

<div align="center ">
gif aqui
</div>

<span id="modelo"> 

## :film_strip: Modelos de Banco de Dados

<div align="center ">

### Modelo Conceitual
<img src="img/conceitual.png" width="700"/>

### Modelo Lógico
<img src="img/logico.png" width="700"/>
</div>

<a href="#menu"> -> Voltar ao menu</a>

<span id="burndown">

## :chart_with_downwards_trend: Burndown

Para acompanhar as atividades, foi criado e atualizado pelo Scrum Master, um gráfico de burndown onde podemos visualizar de forma tangivel os esforços de tempo e a progressão ao longo dos dias da sprint.

<br>
<div align="center"> 
<img src="img/burndown_s1.png" width="700"/>
</div>
<br>

<span id="manual">

 ## :scroll: Manual - Como Rodar

* É necessário ter o Node.js, MySQL, Python(versão 3.10),  Visual Studio Code e o Git instalado na máquina.

* Caso não tenha-os, instale pelo https://nodejs.org/en/, https://dev.mysql.com, https://www.python.org/downloads/, https://code.visualstudio.com/Download e https://git-scm.com/downloads

* Crie uma pasta de sua preferência em sua máquina;

* Abra o cmd e digite: git clone https://github.com/All-Tech-DSM/API-2.git

* Feche o cmd;

* Abra o MySQL e execute o arquivo `script.sql` 

* Vá à pasta 📂 `API-2`;

* Abra a pasta no VS Code;

* Em seguida acesse a pasta 📂 server e abra o arquivo `index.js`;

* Vá na linha 06 e configure a rota de seu MySQL;

* Em seguida salve o arquivo e feche-o;

* Abre o arquivo “buscador.py” e configure os dados do MySQL na linha 7;

* Ainda na pasta 📂 `server` abra o cmd e digite: npm install;

* Em seguida, digite o comando pip install -r req.txt;

* Após a instalação, digite: node index.js;

* Abra um novo terminal e volte para 📂 `API-2`;

* Em seguida vá à pasta 📂 `script`, abra o cmd;

* Digite: npm install;

* Em seguida, digite: npm start;

* A página já estará estanciada em sua localhost.
  

<a href="#menu"> -> Voltar ao menu</a>
