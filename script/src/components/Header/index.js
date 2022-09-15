import { Link } from 'react-router-dom';
import icone from "./icone_transparent.png"
import './style.css';

function Header(){
    return(
        <header>
            <div className='logo'>
                <img src={icone}/>
                <p>All Teach</p>
            </div>

            <div className='nav'>
                <Link to="/">Cadastro</Link>
                <Link to="/consulta">Consulta</Link>
            </div>

            
        </header>
    )
}

export default Header;