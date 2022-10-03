import './style.css';
import React from "react";

function Dados() {
 
  const data = new Date();
  const dia = data.getDate();
  const mes = data.getMonth();
  const ano = data.getFullYear();

  return (
    <div>
      <p id='dadodia'>Dado - {dia}/{mes}/{ano} <br/>
      (Colocar nome da pessoa) </p>

      <div className='split'>
        <div className='pdf'>
          <div>pdf file will render here</div>
        </div>

        <div className='text'>
          <textarea type='text'>Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho 
          Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho Trecho</textarea>
        </div>
      </div>
    </div>
  );
}

export default Dados;