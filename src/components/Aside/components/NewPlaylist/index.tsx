import styles from "./styles.module.css"

import { Plus } from "lucide-react"

export function NewPlaylist() {
    return (
        <button className={styles.container}>
            <Plus color="white" />
            Nova playlist
        </button>
    )
}