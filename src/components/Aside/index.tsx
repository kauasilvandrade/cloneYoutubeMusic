import styles from "./styles.module.css"

import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { NewPlaylist } from "./components/NewPlaylist"
import { Playlists } from "./components/Playlists"

export function Aside() {
    return (
        <div className={styles.container}>
            <Logo />
            <Menu />
            <NewPlaylist />
            <Playlists />
        </div>
    )
}