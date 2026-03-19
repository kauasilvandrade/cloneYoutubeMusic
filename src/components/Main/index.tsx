import styles from "./styles.module.css"

import { FilterList } from "./components/FilterList"

export function Main() {
    return (
        <main className={styles.container}>
            
            <FilterList />

        </main>
    )
}