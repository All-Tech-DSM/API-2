
import { Link } from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <p>All Teach</p>

            <div className='nav'>
                <Link to="/">Cadastro</Link>
                <Link to="/consulta">Consulta</Link>
            </div>

            
        </header>
    )
}

export default Header;