import styles from "./styles.module.css"

import  Home  from "./../../../../assets/icons/homeIcon.svg"
import  Explorer  from "./../../../../assets/icons/explorerIcon.svg"
import  Library  from "./../../../../assets/icons/librayIcon.svg"
import  Upgrade  from "./../../../../assets/icons/upgradeIcon.svg"

export function Menu() {
    return (
        <ul className={styles.container}>
            <li>
                <a href="Home">
                    <img src={Home} alt="Logo Home" /> 
                    <span>Início</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={Explorer} alt="Logo Explorer" /> 
                    <span>Explorar</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={Library} alt="Logo Library" /> 
                    <span>Biblioteca</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={Upgrade} alt="Logo Upgrade" /> 
                    <span>Upgrade</span>
                </a>
            </li>
        </ul>
    )
}