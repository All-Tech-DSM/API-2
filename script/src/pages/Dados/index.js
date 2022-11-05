import './style.css';
import Header from "../../components/Header";
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import Card from "./card.js";
const link = Card()

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

  return (
    <div>
      <Header />
      <div id='dadodia'>
        <p>
          Nome: {dado[0]} <br />
          Email: {dado[2]}
        </p>

        <div>
          <p>Links dos pdfs que foram retirados os trechos:</p>
          {typeof dado[3] !== 'undefined'&& dado[3].map((link) => 
            <a href={link} target='_blanck'><FiArrowRight size={25} /></a>
          )}
        </div>
        
        <div className='split'>
          <div className='text'>
            <p type='text'>{dado[4]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dados;