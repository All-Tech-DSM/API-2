//import Modal from '../../components/Modal'
import './style.css';
import { FiArrowRight } from "react-icons/fi";
import { useState } from 'react'

function Consulta() {
  const [dados, setDados] = useState([]);

  const [showPostModal, setShowPostModal] = useState(false);
  const [detail, setDetail] = useState();

  function togglePostModal(item){
    setShowPostModal(!showPostModal); //trocando de true para false
    setDetail();
  }

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
                      <td data-label="Nome">a</td>
                      <td data-label="Email">a@a.com</td>
                      <td data-label="Consulta">
                        <button onClick={() => togglePostModal()}>
                          <FiArrowRight color='#FFF' size={25} />
                        </button>
                      </td>
                    </tr>
     
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
/*
    {showPostModal && (
      <Modal
        conteudo={detail}
        close={togglePostModal}
      />
    )} */
  );
}

export default Consulta;