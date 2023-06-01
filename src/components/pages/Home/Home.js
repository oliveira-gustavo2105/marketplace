import styles from "./Home.css"

import Drink from  "./img/Drinks.jpg"
import Porcao from "./img/porcoes.jpg"
import Artes from "./img/Artes.jpg"
import Eventos from "./img/Eventos.jpg"

function Home() {
    return (
       
    <div>

        <div className="homePage">
            
            <div className="imageHome">
                <img className="drinks" src={Drink} alt="Drink"> 
                </img>
                <p className="titleHome">Drinks</p>
            </div>
            <div className="imageHome">
                <img className="porcoes" src={Porcao} alt="Porcoes">
                </img>
                <p className="titleHome">Porções</p>
            </div>
            
            
        </div>
        <div className="homePage2">
            <div className="imageHome">
                <img className="drinks" src={Artes} alt="Drink"> 
                </img>
                <p className="titleHome">Artes</p>
            </div>
            <div className="imageHome">
                <img className="porcoes" src={Eventos} alt="Porcoes">
                </img>
                <p className="titleHome">Eventos</p>
            </div>
        </div>
    </div>
) 
}

export default Home