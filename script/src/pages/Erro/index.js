import './style.css';
import { FiFrown } from "react-icons/fi";

function Erro() {
  return (
    <div className='erro'>
      <FiFrown size={65} />
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}

export default Erro;