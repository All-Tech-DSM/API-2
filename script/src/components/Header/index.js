import { Link } from 'react-router-dom';
import icone from "./icone_transparent.png"
import './style.css';

function Header(){
    return(
        <header>
            <div className='logo'>
                <img src={icone}/>
                <p>All Tech</p>
            </div>

            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                
                <div class="menu">
                    <li><Link to="/cadastro">Cadastro</Link></li>
                    <li><Link to="/consulta">Consulta</Link></li>
                </div>
                
            </ul>
            
        </header>
    )
}

export default Header;