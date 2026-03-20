import styles from "./styles.module.css"

import { ChevronRight, ChevronLeft } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"

import { ImageSlide } from "./ImageSlide/index.tsx"

import type { Playlist } from "./../../../../types/Playlist.ts"

type Props = {
    title: string
    playlist: Playlist[]
}

export function SlideMusic({ title, playlist }: Props) {
    return (
        <div className={styles.container}>  
        
            <div className={styles.container__actions}>
                <h2>{title}</h2>
                <div className={styles.container__actionsButtons}>
                    <button><ChevronLeft color="white" /></button>
                    <button><ChevronRight color="white" /></button>
                </div>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
            >
                {
                    playlist.map((playlist) => (
                        <SwiperSlide>
                            <ImageSlide 
                                key={playlist.id}
                                musicalImage={playlist.musicalImage}
                                name={playlist.name}
                                artist={playlist.artist}
                                numberOfViews={playlist.numberOfViews}
                            />
                        </SwiperSlide>
                    ))
                }   
            </Swiper>

        </div>
    )
}