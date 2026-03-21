import styles from "./styles.module.css"

import { useEffect, useRef, useState } from "react"

import { ChevronRight, ChevronLeft } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper/modules"
import { Navigation } from "swiper/modules"

import { ImageSlide } from "./ImageSlide/index.tsx"

import type { Playlist } from "./../../../../types/Playlist.ts"

type Props = {
    title: string
    playlist: Playlist[]
}

export function SlideMusic({ title, playlist }: Props) {

    const [slidePerView, setSlidePerview] = useState(4)

    const prevRef = useRef<HTMLButtonElement | null>(null)
    const nextRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {

        function handleResize() {
            if (window.innerWidth < 500) {
                setSlidePerview(1)
            } else if (window.innerWidth < 720) {
                setSlidePerview(2)
            } else if (window.innerWidth < 1080) {
                setSlidePerview(3)
            } else {
                setSlidePerview(4)
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return (
        <div className={styles.container}>  
        
            <div className={styles.container__actions}>
                <h2>{title}</h2>
                <div className={styles.container__actionsButtons}>
                    <button 
                    ref={prevRef}
                    ><ChevronLeft color="white" /></button>
                    <button 
                    ref={nextRef}
                    ><ChevronRight color="white" /></button>
                </div>
            </div>

            <Swiper
                modules={[Scrollbar, Navigation]}
                slidesPerView={slidePerView}
                spaceBetween={20}
                onBeforeInit={(swiper) => {
                    const navigation =swiper.params.navigation as any

                    if (swiper.params.navigation) {
                        navigation.prevEl = prevRef.current
                        navigation.nextEl = nextRef.current
                    }
                }}
                navigation
            >
                {
                    playlist.map((playlist) => (
                        <SwiperSlide key={playlist.id}>
                            <ImageSlide 
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