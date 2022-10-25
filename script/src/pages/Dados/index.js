import './style.css';
import Header from "../../components/Header";
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Axios from "axios";

import Card from "./card.js";
const link = Card()

import PDF from "../../PDF/lucineia pereira de paula/merger.pdf"

function Dados() {
  var { id } = useParams();
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
  console.log(dado[3])




  return (
    <div>
      <Header />
      <div id='dadodia'>
        <p>
          Nome: {dado[0]} <br />
          Email: {dado[2]}
        </p>

        <div className='split'>

          <div className='pdf'>
            <embed src={PDF} width="100%" height="100%" />
          </div>

          <div className='text'>
            <p type='text'>{dado[3]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dados;