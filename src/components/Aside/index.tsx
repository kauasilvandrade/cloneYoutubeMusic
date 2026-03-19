import styles from "./styles.module.css"

import { Menu } from "./components/Menu"
import { NewPlaylist } from "./components/NewPlaylist"
import { Playlists } from "./components/Playlists"

export function Aside() {
    return (
        <aside className={styles.container}>
            <Menu />
            <NewPlaylist />
            <Playlists />
        </aside>
    )
}