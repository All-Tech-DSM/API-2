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
  console.log()

  // var x = [['"rodrigo garcia"', 'eduardofalandess@gmail.com', ['http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx?link=%2f2022%2fexecutivo+secao+i%2fsetembro%2f17%2fpag_0001_05789c6355b2032cb54a01f77b6c114d.pdf&pagina=1&data=17/09/2022&caderno=ExecutivoI&paginaordenacao=100001', 'http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx?link=%2f2022%2fexecutivo+secao+i%2fsetembro%2f17%2fpag_0107_719a6d875de990dd38fcc8e4abb9d7a3.pdf&pagina=107&data=17/09/2022&caderno=ExecutivoI&paginaordenacao=100107', 'http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx?link=%2f2022%2fexecutivo+secao+i%2fsetembro%2f17%2fpag_0088_aadf43b1c6df8c3075e8cb177747c15f.pdf&pagina=88&data=17/09/2022&caderno=ExecutivoI&paginaordenacao=100088', 'http://www.imprensaoficial.com.br/DO/GatewayPDF.aspx?link=%2f2022%2fexecutivo+secao+ii%2fsetembro%2f17%2fpag_0001_c754e4022455326cde557992404bb970.pdf&pagina=1&data=17/09/2022&caderno=ExecutivoII&paginaordenacao=100001']]]

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
                
                
     
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Consulta;