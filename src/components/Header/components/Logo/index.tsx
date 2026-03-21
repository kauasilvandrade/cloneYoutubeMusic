import styles from "./styles.module.css"

import LogoIcon from "./../../../../assets/global/logo.svg"

import { Menu } from "lucide-react"

type LogoProps = {
    toggleAside: () => void
}

export function Logo({ toggleAside }: LogoProps) {
    return (
        <div className={styles.container}>
            <button onClick={toggleAside} ><Menu size={25} color="white" /></button>
            <img src={LogoIcon} alt="Logo Youtube Music" />
        </div>
    )
}