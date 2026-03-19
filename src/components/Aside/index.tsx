import styles from "./styles.module.css"

import { Menu } from "./components/Menu"
import { NewPlaylist } from "./components/NewPlaylist"
import { Playlists } from "./components/Playlists"

export function Aside() {
    return (
        <div className={styles.container}>
            <Menu />
            <NewPlaylist />
            <Playlists />
        </div>
    )
}