import styles from "./styles.module.css"

import LogoIcon from "./../../../../assets/global/logo.svg"

import { Menu } from "lucide-react"

export function Logo () {
    return (
        <div className={styles.container}>
            <button><Menu size={25} color="white" /></button>
            <img src={LogoIcon} alt="Logo Youtube Music" />
        </div>
    )
}