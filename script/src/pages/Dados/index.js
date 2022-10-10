//import Modal from '../../components/Modal'
import './style.css';
import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Dados() {
  var {id}=useParams();
  const [listo, setList] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/pdf_inf`).then((resp) => {
      
      setList(resp.data);
    });
  }, [])
  const [dado,setDado]=useState([]);
  if(dado.length == 0){
    for(var k = 0; listo.length > k; ++k){
      if(listo[k][1] == id){
        setDado(listo[k])
        break
      } 
    }
  }
  console.log(dado[3])




return (
  <div>
    <div>
      <p id='dadodia'>
        Nome: {dado[0]} <br/>
        Email: {dado[2]}
      </p>

      <div className='split'>
          <div className='pdf'>
            <div>pdf file will render here</div>
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