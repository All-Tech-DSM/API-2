<div align="center" id="menu">

![logo_transparent](https://user-images.githubusercontent.com/100284976/204177068-e171ce45-da4d-46a7-83d4-c4425a41cee4.png)

<h3> Desenvolvimento de Aplicação Web Simples, FrontEnd Básico, com Persistência em BD Relacional </h3>

<p>
    <a href="#sobre">Sobre</a> | 
    <a href="#entrega">Entregas de Sprints</a> |
    <a href="#backlog">Backlogs</a> | 
    <a href="#pastas">Configuração das pastas</a> | 
    <a href="#manual">Manual de usuário</a> |
    <a href="#equipe">Equipe</a>
</p>
</div>
<br>

<span id="sobre">

## :pencil: Sobre o projeto
 O projeto tem como objetivo criar um robô automatizado que faz a leitura, identifica e busca o conteúdo do Diário Oficial do Estado de SP relacionado aos Professores Associados, emitindo o relatório diário.
    

> :gear: **Tecnologias Utilizadas:** [ReactJs](https://pt-br.reactjs.org/), [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript), [TypeScript](https://www.typescriptlang.org/), [Node](https://nodejs.org/en/about/), [Python](https://www.python.org/), [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML), [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS), [Figma](http://www.figma.com), [Visual Studio Code](https://code.visualstudio.com/), [Discord](https://discord.com/), [GitHub](https://github.com/), [Excel](https://www.microsoft.com/pt-br/microsoft-365/free-office-online-for-the-web)

> **Documentação do projeto:** [AllTech v4.0.pdf](https://github.com/All-Tech-DSM/API-2/files/10099932/AllTech.v4.0.pdf)

<br>

<span id="entrega">
 
## 🏁 Entregas de Sprints
Cada uma realizada através de tag neste repositório, além da criação de branches com relatório de o que foi desenvolvido em cada sprint contendo o DOR e DOD.
| Sprint |  Previsão  |      Status     | Histórico |
|:------:|:----------:|:---------------:|:---------:|
|   01   | 18/09/2022 | Finalizado ✔️   | [Ver relatório](https://github.com/All-Tech-DSM/API-2/tree/Sprint-1) |
|   02   | 09/10/2022 | Finalizado ✔️   | [Ver relatório](https://github.com/All-Tech-DSM/API-2/tree/Sprint-2) |
|   03   | 06/11/2022 | Finalizado ✔️   | [Ver relatório](https://github.com/All-Tech-DSM/API-2/tree/Sprint-3) |
|   04   | 27/11/2022 | Finalizado ✔️   | [Ver relatório](https://github.com/All-Tech-DSM/API-2/tree/Sprint-4) |

<br>

<span id="backlog">  

## :pushpin: Backlog do Produto  

 #### Épicos (Requisitos Funcionais) 
| SPRINT | CÓDIGO | DESCRIÇÃO | STATUS |
|:------:|:------:|:----------|:------:|
|   1    |   RF1  | Cadastro dos associados                               |   ✅    |
|   1    |   RF2  | Raspagem de dados (leitor)                            |   ✅    |
|   1    |   RF3  | Consultas de dados                                    |   ✅    |
|   1    |   RF4  | Automação do download e da exclusão dos pdf's         |   ✅    |
|   2    |   RF5  | Raspagem de trechos da página                         |   ✅    |
|   3    |   RF6  | Automação da montagem do relatório diário             |   ✅    |
|   4    |   RF7  | Destaque dos prazos nos relatórios                    |   ✅    |
|   4    |   RF8  | Automação do envio de e-mails                         |   ✅    |

#### Requisitos Não Funcionais  
| CÓDIGO | DESCRIÇÃO | STATUS |
|:------:|:----------|:------:|
| RNF1 | Linguagem Node.js                      | ✅ |
| RNF2 | Programação em TypeScript e JavaScript | ✅ |
| RNF3 | Banco de Dados Relacional (MySQL)      | ✅ |
| RNF4 | Documentações do Projeto               | ✅ |
| RNF5 | Responsividade                         | ✅ |

</div>

<a href="#menu">Voltar ao menu</a>

<span id="pastas">

## :file_folder: Configuração das pastas
* 📂 `script`: Pasta com os códigos do react/front;
* 📂 `server`: Pasta com os códigos para conexão com o banco, consulta do diário oficial e relatórios diários;
* 📂 `PDF`: Pasta onde são armazenados os PDFs baixados;

<br>


<span id="manual">

 ## :scroll: Manual de usuário

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

![index](https://user-images.githubusercontent.com/100284976/204158929-09748f58-c357-4d7a-acf7-1c912fb8f76b.png)

* Em seguida salve o arquivo e feche-o;

* Abre o arquivo “buscador.py” e configure os dados do MySQL na linha 11;

![buscador](https://user-images.githubusercontent.com/100284976/204158947-ce51393f-68dc-4716-ae3f-58a5a1b9c43c.png)

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
  

<a href="#menu">Voltar ao menu</a>
    

<span id="equipe"> 

## :busts_in_silhouette: Equipe

|    Função     |    Nome    |    LinkedIn & GitHub    |
| :-----------: | :--------- | :---------------------: |
| Product Owner | Bruno Henrique Menezes Ramos           |  [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/brunohenriquemenezesramos) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/BrunoHenriique)              |
| Scrum Master  | Amanda Vieira de Oliveira              |  [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/amanda-vo/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/amandavo)              |
|   Dev Team    | Andressa Ginevro de Souza              |  [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/andressa-ginevro-de-souza-55173b1b8/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/Andressafatec)              |
|   Dev Team    | Carlos Eduardo Falandes                |   [![Lattes Badge](https://img.shields.io/badge/-Lattes-orange?style=flat-square&logo=GitBook&logoColor=white&link=http://lattes.cnpq.br/2433599000300626)](http://lattes.cnpq.br/3579183651868833) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/Desduh)              |
 |   Dev Team    | Gustavo Borges Lima                   |  [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/NOME/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/Miojoguu)              |
 |   Dev Team    | Júlia Sousa Gayotto                   |  [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/júlia-gayotto/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/JuliaGayotto)              |
 |   Dev Team    | Lucas França Registro                 |  [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/NOME/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/LucasFrancaRegistro)              |
