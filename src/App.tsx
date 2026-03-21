import styles from "./styles.module.css"

import { useEffect, useState } from "react"

import { Aside } from "./components/Aside"
import { Main } from "./components/Main"
import { Header } from "./components/Header"

export function App() {
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  function toggleAside() {
    setIsAsideOpen(prev => !prev)
  }

  useEffect(() => {
    function handleSize() {
      if (window.innerWidth > 1080) {
        setIsAsideOpen(false)
      }
    }

    handleSize()

    window.addEventListener("resize", handleSize)

    return () => {
      window.removeEventListener("resize", handleSize)
    }

  }, [])

  return (
    <div className={styles.container}>
      <Header toggleAside={toggleAside} />
      <Aside isOpen={isAsideOpen} />
      <Main />
    </div>
  )
}