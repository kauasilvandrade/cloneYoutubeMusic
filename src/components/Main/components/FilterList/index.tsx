import styles from "./styles.module.css"

export function FilterList() {
    return (
        <ul className={styles.container}>
            <li><a href="#">Podcasts</a></li>
            <li><a href="#">Para treinar</a></li>
            <li><a href="#">Energia</a></li>
            <li><a href="#">Festa</a></li>
            <li><a href="#">Relax</a></li>
            <li><a href="#">Romance</a></li>
            <li><a href="#">Para ouvir no trânsito</a></li>
            <li><a href="#">Positividade</a></li>
            <li><a href="#">Triste</a></li>
            <li><a href="#">Foco</a></li>
            <li><a href="#">Para </a></li>
        </ul>
    )
}