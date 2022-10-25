import './style.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from './logo_transparent.png';

export default function SignIn(){
  const [email, setEmail] = useState('all_tech@gmail.com');
  const [senha, setSenha] = useState('senhaapi');

  function handleSubmit(e){
    e.preventDefault();
    if(email === '' || senha === ''){
      toast.error('Preencha todos os campos')
    } else if(email === 'all_tech@gmail.com' && senha === 'senhaapi'){
      window.location.href = "/cadastro"
    } else {
      toast.error('Senha incorreta')
    }
  }

  

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <p>Login</p>
          <input type="text" placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value) } />
          <button type="submit">Entrar</button>
        </form>  

      </div>
    </div>
  );
}