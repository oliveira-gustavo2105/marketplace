import { Link } from "react-router-dom"

import Container from "../Container/Container"

import styles from "./NavBar.css"
import { useRef, useState } from "react"
import { useOutsideClick } from "../../useOutsideClick";

function NavBar(){


    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive) 
    console.log(isActive)

    return(
        <div>
               
            <nav className="containerMenu">
            <div className="containerTeste">
                <button onClick={onClick} className="menu-btn">
                    <img className="menuLogo" 
                    src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png" 
                    alt="menu" />
                </button>
            </div>
            <h3 className="titleLogo">La Drink</h3>
            <h1 className="titleBanner">De La Arte</h1>
                
                {/* <ul class="listTitle">
                    <li className="HomeTeste">
                    <Link class="link" to="/">Home</Link>
                    </li>
                    <li>
                    <Link class="link" to="/contact">Contato</Link>
                    </li>
                    <li>
                    <Link class="link" to="/company"> Empresa</Link>
                    </li>
                    <li>
                    <Link class="link" to="/testes"> Testes</Link>
                    </li>
                    <li>
                    <Link class="link" to="/company"> Login</Link>
                    </li>
                    <li>
                    <Link class="link" to="/testes"> Cadastros</Link>
                    </li>
                </ul>  */}
                                     
            </nav>

            <div className="containerTeste">
                <button onClick={onClick} className="menu-btn">
                    <img className="menuLogo" 
                    src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png" 
                    alt="menu" />
                </button>
            </div>
                <nav className={`navbar ${isActive ? "active" : "inactive"}`} ref={dropDownRef}>

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
                </nav> 
        </div>
    )
}

export default NavBar

