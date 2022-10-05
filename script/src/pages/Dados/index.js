import './style.css';
import React from "react";
import { useParams } from 'react-router-dom';

function Dados() {

  var { id } = useParams();
  var dados = [['1','Carlinho','','trancar matricula','carlinho@gmail'],['2','Betnha','','trancar matricula agora','betinha@gmail']]
  var dado = ''
  for(var k=0; dados.length>k; ++k){
    if(dados[k][0] == id){
      dado = dados[k]
      break
    }
  }


  return (
    <div>
      <p id='dadodia'>
      Nome: {dado[1]} <br/>
       Email: {dado[4]}</p>

      <div className='split'>
        <div className='pdf'>
          <div>pdf file will render here</div>
        </div>

        <div className='text'>
          <p type='text'>{dado[3]}</p>
        </div>
      </div>
    </div>
  );
}

export default Dados;