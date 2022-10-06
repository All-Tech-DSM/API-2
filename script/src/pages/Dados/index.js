//import Modal from '../../components/Modal'
import './style.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Dados() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/pdf_ind`).then((resp) => {
      console.log(resp.data);
      setList(resp.data);
    });
  }, [])


  return (
    <div>
      <p id='dadodia'>
        Nome:  <br/>
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
  )
}


export default Dados;