//import Modal from '../../components/Modal'
import './style.css';
import { FiDownload } from "react-icons/fi";
import { useState } from 'react';
import Axios from "axios";

function Consulta() {
  const [dados, setDados] = useState([]);
  const [dado, setDado] = useState([]);


    Axios.get("http://localhost:3001/pdf_inf").then((response) => {
      setDado(response.data);
    });
  
  console.log(dado)

  if (!dado) return null

  
  return (
    <div>
      {dados.lenght === true ? (
        <div className='none'>
          <span>Nenhum dado encontrado...</span>
        </div>
      ) : (
        <>
          <p id='dadodia'>Dado(s) do dia</p>
          <div className='container-table'>
            <table>
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Email</th>
                  <th scope="col">Consulta</th>
                </tr>
              </thead>

              <tbody>
                
              {
                  dado.map((pss,index) => (
                    <tr>
                      <td key={index[0]} data-label="Nome">{ pss[0] }</td>
                      <td key={index[1]} data-label="Email">{ pss[1] }</td>
                      <td key={index[2]} data-label="Consulta">
                        <a href={pss[2]}>
                          <FiDownload size={25} />
                        </a>
                      </td>
                    </tr>)
                  )
                } 
     
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Consulta;