//import Modal from '../../components/Modal'
import './style.css';
import { FiDownload } from "react-icons/fi";
import { useState } from 'react'

function Consulta() {
  const [dados, setDados] = useState([]);

  return (
    <div>
      {dados.lenght === 0 ? (
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
                
                    <tr>
                      <td data-label="Nome">Amanda Vieira de Oliveira</td>
                      <td data-label="Email">amandavieiradeoliveira@gmail.com</td>
                      <td data-label="Consulta">
                        <button>
                          <FiDownload size={25} />
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td data-label="Nome">Bianca Oliveira Vieira</td>
                      <td data-label="Email">biancaoliveiravieira@gmail.com</td>
                      <td data-label="Consulta">
                        <button>
                          <FiDownload size={25} />
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td data-label="Nome">Camila Vieira de Oliveira</td>
                      <td data-label="Email">amandavieiradeoliveira@gmail.com</td>
                      <td data-label="Consulta">
                        <button>
                          <FiDownload size={25} />
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td data-label="Nome">Damaris Oliveira Vieira</td>
                      <td data-label="Email">biancaoliveiravieira@gmail.com</td>
                      <td data-label="Consulta">
                        <button>
                          <FiDownload size={25} />
                        </button>
                      </td>
                    </tr>
     
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Consulta;