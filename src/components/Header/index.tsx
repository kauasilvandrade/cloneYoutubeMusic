import styles from "./styles.module.css"

import { Logo } from "./components/Logo"
import { Search } from "./components/Search"
import { UserProfile } from "./components/UserProfile"

export function Header() {
    return (
        <header className={styles.container}>
            <Logo />
            <Search />
            <UserProfile /> 
        </header>
    )
}