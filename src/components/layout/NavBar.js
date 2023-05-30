import { Link } from "react-router-dom"

import Container from "./Container"

import styles from "./NavBar.css"
function NavBar(){
    return(
        <nav class="navbar">
            <Container>
                <Link to="/">
                    <img className="bolsaLogo" src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png" alt="" />
                </Link>
                <ul class="listTitle">
                    <li class="list">
                    <Link class="link" to="/">Home</Link>
                    <li>
                    <Link class="link" to="/contact">Contato</Link>
                    </li>
                    <li>
                    <Link class="link" to="/company"> Empresa</Link>
                    </li>
                    <Link class="link" to="/testes"> Testes</Link>
                    </li>
                </ul>
            </Container>   
        
        </nav>
    )
}

export default NavBar

