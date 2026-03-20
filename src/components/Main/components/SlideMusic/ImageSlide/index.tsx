import styles from "./styles.module.css"

type Props = {
    musicalImage: string
    name: string
    numberOfViews: string
    artist: string
}

import PlayIcon from "./../../../../../assets/icons/playIcon.svg"

export function ImageSlide({ musicalImage, name, artist, numberOfViews }: Props) {
    return (
        <a href="#" className={styles.container}>
            <img src={musicalImage} className={styles.container__slideImg} alt="Imagem Slide" />
            <span>{name}</span>
            <span>{artist} • {numberOfViews}</span>

            <div className={styles.playIcon}>
                <img src={PlayIcon} alt="" />
            </div>
        </a>
    )
}