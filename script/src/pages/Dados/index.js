//import Modal from '../../components/Modal'
import './style.css';
import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Dados() {
  var {id}=useParams();
  //console.log(id)
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/pdf_inf`).then((resp) => {
      
      setList(resp.data);
    });
  }, [])
  console.log('repeticao')
  // const [dado,setDado]=useState([]);
  // for(var k = 0; list.length > k; ++k){
  //   if(list[k][1] == id){
  //     setDado(list[k])
  //     console.log(list[k])
  //     break
  //   } 
  // }
  // if(list.length >= 1){
  //   console.log('oi')
  // }



return (
  <div>
    <p id='dadodia'>Dado(s) do dia</p>
    <div className='container-table'>
      <table>
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Consulta</th>
          </tr>
        </thead>

        <tbody>
          {typeof list !== 'undefined' && list.map((value) => {
            return !value.envio ?
            <div>
                   <p id='dadodia'>
                     Nome: {value[0]} <br/>
                     Email: 
                   </p>
            
                    <div className='split'>
                       <div className='pdf'>
                         <div>pdf file will render here</div>
                       </div>
            
                       <div className='text'>
                         <p type='text'></p>
                       </div>
                    </div>
                 </div>
              : null
          })}
        </tbody>
      </table>
    </div>
  </div>
);
        }

export default Dados;