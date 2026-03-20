import styles from "./styles.module.css"

import { PlaylistItem } from "./components/PlaylistItem"

import { useEffect, useState } from "react"

type Playlist = {
    id: number,
    name: string,
    author: string,
    image: string
}

export function Playlists() {

    const [playlists, setPlaylists] = useState<Playlist[]>([])

    useEffect(() => {
        async function fetchPlaylist() {
            const response = await fetch("./utils/playlists.json")
            const data = await response.json()
            setPlaylists(data)
        }
        fetchPlaylist()
    }, [])

    return (
        <ul className={styles.container}>
            {
                playlists.map((playlist) => (
                    <PlaylistItem 
                        key={playlist.id}
                        name={playlist.name}
                        author={playlist.author}
                    />
                ))
            }
        </ul>
    )
}