import './style.css';
import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import Axios from "axios";
import { Link } from "react-router-dom";
import { FiArrowRight, FiFileText } from "react-icons/fi";

function Consulta() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get(`http://127.0.0.1:3001/pdf_inf`).then((resp) => {
      setList(resp.data);
    });
  }, [])


  return (
    <div>
    <Header/>
      {list.lenght === 0 ? (
        <div className='none'>
          <p>Nenhum dado encontrado...</p>
          <p>Não há relatório diário!</p>
        </div>
      ) : (
        <>
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
                    <Link to={'/dados/'+value[1]}><FiArrowRight size={25} /></Link>
                  </td>
                </tr>
                : null
            })}
          </tbody>
        </table>
      </div>
      <div className='flex-end'>
        <a id='diario'><FiFileText size={25} />Relatório diário armazenado na página Server</a>
      </div>
      </>
      )}
      
    </div>
  );
}

export default Consulta;