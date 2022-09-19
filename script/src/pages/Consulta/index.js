//import Modal from '../../components/Modal'
import './style.css';
import { FiDownload } from "react-icons/fi";
import React,{ useState, useEffect} from "react";
import Axios from "axios";

function Consulta() {
  const [listGames, setListGames] = useState([]);
    
  useEffect(() => {
      Axios.get(`http://localhost:3001/pdf_inf`).then((resp) => {
          setListGames(resp.data);
          console.log(resp.data)
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
              <th scope="col">Email</th>
              <th scope="col">Consulta</th>
            </tr>
          </thead>

          <tbody>
            {typeof listGames !== 'undefined'&& listGames.map((value) => {
                return !value.envio ? 
                <tr>
                  <td data-label="Nome">{ value[0] }</td>
                  <td data-label="Email">{ value[1] }</td>

                  
                    <td data-label="Consulta">
                    {value[2].map((link) => 
                    <a className='botao' href={ link } target="_blank">
                      <FiDownload size={25} />
                    </a>
                    )}
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