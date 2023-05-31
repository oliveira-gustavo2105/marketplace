import { Link } from "react-router-dom"

import styles from "./TopBar.css"

function TopBar(){

    return(

        <div>

                <nav className="containerTop">

                    <ul class="listTitleTop">
                        <li className="list">
                        <Link class="link" to="/company">Cadastro</Link>
                        </li>
                        <li className="list">
                        <Link class="link" to="/testes">Login</Link>
                        </li>
                    </ul>
                </nav> 
        </div>
    )
}

export default TopBar

