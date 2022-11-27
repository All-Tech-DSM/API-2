import './style.css';
import Header from "../../components/Header";
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function Dados() {
  var { id } = useParams();
  id = parseInt(id)
  const [listo, setList] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/pdf_inf`).then((resp) => {

      setList(resp.data);
    });
  }, [])
  const [dado, setDado] = useState([]);
  if (dado.length === 0) {
    for (var k = 0; listo.length > k; ++k) {
      if (listo[k][1] === id) {
        setDado(listo[k])
        break
      }
    }
  }

  function sendemail() {
    console.log('oi')
    Axios.post("http://localhost:3001/envio_de_emails", {
      info: dado
    }).then((res)=>{
      console.log(res)

      
    })    
  }

  return (
    <div>
      <Header />
      <div id='dados'>
        <p>
          <b>Nome:</b> {dado[0]} <br />
          <b>Email:</b> {dado[2]}
        </p>
      </div>

      <div id='links'>
        <p>Links dos pdfs que foram retirados os trechos:</p>
        {typeof dado[5] !== 'undefined' && dado[5].map((link) =>
          <a href={link} target='_blanck'><FiArrowRight size={25} /></a>
        )}
      </div>

      <div className='trecho'>
        <div className='text'>
          <p type='text'>{dado[6]}</p>
        </div>
      </div>

      <div className='flex-end'>
        <button id='diario' type='submit' onClick={() => sendemail()}><MdOutlineEmail size={25}/>Enviar email</button>
      </div>
    </div>
  );
}
 
export default Dados;