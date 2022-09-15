create database cadastro;
use cadastro;

create table funcionario(
fun_cod int auto_increment primary key,
nome varchar(70) not null, 
email varchar(40) not null unique key, 
cpf varchar(11)  not null unique key, 
nas_data date, 
tel_fixo varchar(15), 
tel_celular varchar(15),
cep varchar(10),
numero varchar(6),
rua varchar(50),
bairro varchar(50),
cidade varchar(50),
estado varchar(50),
complemento varchar(50));

create table escolas(
esc_cod int auto_increment primary key,
escola varchar(100) not null 
);

create table emprego(
emp_cod int auto_increment primary key,
fun_cod int not null,
foreign key(fun_cod) REFERENCES funcionario (fun_cod),
esc_cod int not null,
foreign key(esc_cod) REFERENCES escolas (esc_cod)
);