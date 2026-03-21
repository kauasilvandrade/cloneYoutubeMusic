import styles from "./styles.module.css"

import { EllipsisVertical } from "lucide-react"

type Props = {
    musicalImage: string
    name: string
    numberOfViews: string
    artist: string
}

import PlayIcon from "./../../../../../assets/icons/playIcon.svg"

export function ImageSlide({ musicalImage, name, artist, numberOfViews }: Props) {
    function getImageUrl(path: string) {
        return `${import.meta.env.BASE_URL}${path}`
    }

    return (
        <a href="#" className={styles.container}>
            <img src={getImageUrl(musicalImage)} className={styles.container__slideImg} alt="Imagem Slide" />
            <span>{name}</span>
            <span>{artist} • {numberOfViews}</span>

            <div className={styles.playIcon}>
                <img src={PlayIcon} alt="PLay Icon" />
            </div>

            <div className={styles.moreIcon}>
                <EllipsisVertical size={20} />
            </div>
        </a>
    )
}