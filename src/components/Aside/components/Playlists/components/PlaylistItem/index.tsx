import styles from "./styles.module.css"

type Props = {
    name: string
    author: string
}

export function PlaylistItem({ name, author }: Props) {
    return (
        <li className={styles.container}>
            <h3>{name}</h3>
            <span>{author}</span>
        </li>
    )
}