import { Link } from "react-router-dom"

import styles from "./TopBar.css"

function TopBar(){

    return(
        <div>
               
            <nav className="containerMenu">
                
                <ul class="listTitle">
                    <li class="list">
                    <Link class="link" to="/">Home</Link>
                    </li>
                    <li>
                    <Link class="link" to="/contact">Contato</Link>
                    </li>
                </ul> 
            </nav>    
             
        </div>
    )
}

export default TopBar

