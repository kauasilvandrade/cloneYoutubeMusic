import styles from "./styles.module.css"

import { useEffect, useState } from "react"

import { Logo } from "./components/Logo"
import { Search } from "./components/Search"
import { UserProfile } from "./components/UserProfile"

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
            <Logo />
            <Search />
            <UserProfile /> 
        </header>
    )
}