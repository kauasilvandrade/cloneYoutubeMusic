import styles from "./styles.module.css"

import { SearchIcon } from "lucide-react"

export function Search() {
    return (
        <div className={styles.container}>
            <button>
                <SearchIcon color="#757575" size={18} />
            </button>
            <input 
                type="text" 
                name="search" 
                id="search" 
                placeholder="Pesquise músicas, álbuns, artistas, podcasts" 
            />
        </div>
    )
}