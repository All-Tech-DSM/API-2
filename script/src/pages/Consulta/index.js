//import Modal from '../../components/Modal'
import './style.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Consulta() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get(`http://127.0.0.1:3001/pdf_inf`).then((resp) => {
      setList(resp.data);
    });
  }, [])


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
                <tr>
                  <td data-label="Nome">
                    {value[0]}
                  </td>

                  <td data-label="Consulta">
                    <Link to={'/dados/'+value[1]}>Ver mais...</Link>
                  </td>
                </tr>
                : null
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Consulta;