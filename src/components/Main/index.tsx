import styles from "./styles.module.css"

import { useState, useEffect } from "react"

import { FilterList } from "./components/FilterList"
import { SlideMusic } from "./components/SlideMusic"

import type { Playlist } from "../../types/Playlist"

export function Main() {

    const [listenAgain, setListenAgain] = useState<Playlist[]>([])
    const [oldFavorites, setOldFavorites] = useState<Playlist[]>([])    
    const [albums, setAlbums] = useState<Playlist[]>([])    

    useEffect(() => {

        async function fecthJSON() {
            
            const [listenAgainRes, oldFavoritesRes, albumsRes] = await Promise.all([
                fetch("./utils/listenAgain.json"),
                fetch("./utils/oldFavorites.json"),
                fetch("./utils/albums.json")
            ])

            const listenAgainData = await listenAgainRes.json()
            const oldFavoritesData = await oldFavoritesRes.json()
            const albumsData = await albumsRes.json()

            setListenAgain(listenAgainData)
            setOldFavorites(oldFavoritesData)
            setAlbums(albumsData)
        }
        
        fecthJSON()

    }, [])

    return (
        <main className={styles.container}>
            
            <FilterList />

            <SlideMusic
                title="Ouvir de novo"
                playlist={listenAgain}
            />

            <SlideMusic
                title="Álbuns para você"
                playlist={albums}
            />
            
            <SlideMusic
                title="Favoritos Antigos"
                playlist={oldFavorites}
            />


        </main>
    )
}