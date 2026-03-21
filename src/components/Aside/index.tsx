import styles from "./styles.module.css"

import { Menu } from "./components/Menu"
import { NewPlaylist } from "./components/NewPlaylist"
import { Playlists } from "./components/Playlists"

type AsideProps = {
    isOpen: boolean
}

export function Aside({ isOpen }: AsideProps) {
    return (
        <aside className={`${styles.container} ${isOpen ? styles.open : ""}`}>
            <Menu />
            <NewPlaylist />
            <Playlists />
        </aside>
    )
}