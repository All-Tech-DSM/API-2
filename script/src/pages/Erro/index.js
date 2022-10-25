import './style.css';
import Header from "../../components/Header";
import { FiFrown } from "react-icons/fi";

function Erro() {
  return (
    <div>
      <Header />
      <div className='erro'>
        <FiFrown size={65} />
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
}

export default Erro;