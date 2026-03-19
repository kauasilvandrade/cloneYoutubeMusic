import styles from "./styles.module.css"

import { Aside } from "./components/Aside"
import { Main } from "./components/Main"
import { Header } from "./components/Header"

export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Aside />
      <Main />
    </div>
  )
}