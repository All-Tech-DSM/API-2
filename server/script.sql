create database cadastro;
use cadastro;

create table funcionario(
fun_cod int auto_increment primary key,
nome varchar(70) not null, 
email varchar(40) not null, 
cpf varchar(14)  not null, 
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

create table trechos(
tre_cod int auto_increment primary key,
trecho varchar(5000)
);

create table relacao(
rel_cod int auto_increment primary key,
fun_cod int not null,
foreign key(fun_cod) REFERENCES funcionario (fun_cod),
tre_cod int not null,
foreign key(tre_cod) REFERENCES trechos (tre_cod)
);

insert into funcionario (fun_cod, nome, email, cpf, nas_data, tel_fixo, tel_celular, cep, numero, rua, bairro, cidade, estado, complemento) values 
('01','Lucineia Pereira de Paula', 'l@l.com', '11111111111111', '2004-10-01', '12992432428', '12992432428', '12235830', '111', '1', '1', 'SP', 'SP', 'casa');