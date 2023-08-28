import React, { useRef, useState } from 'react'
import styles from '@/styles/home/testimoniSection.module.scss'
import SectionTitle from '../general/SectionTitle'
import TestimoniCard from '../testimoni/testimoniCard'
import TestiIcon from '@/assets/images/icon/testimoni.svg'
import variables from '@/styles/globals.module.scss'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import ChevronLeft from '@/assets/images/icon/chevron-left-normal.svg'
import ChevronRight from '@/assets/images/icon/chevron-right-normal.svg'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react'
import SectionContainer from '../general/SectionContainer'
import ContentContainer from '../general/ContentContainer'
import StyledText from '../general/StyledText'
import TestiTitleBackground from '@/assets/images/background/testimonies.webp'
import { testimoniData } from '@/assets/data/testimoniData'


export default function TestimoniSection() {
    const cardData = Array.from({ length: 10 }, () => 'testimoni');
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const swiperRef = useRef();

    const swiper = useSwiper();
    return (
        <SectionContainer
            id='testimoni'
            paddingBlock={true}
            marginBottom={true}
        >
            <ContentContainer>
                <div className={styles.testimoniSectionContainer}>
                    <StyledText
                        src={TestiTitleBackground}
                    />
                    <SectionTitle>
                        Testimoni
                    </SectionTitle>
                    <button
                        id='button-left'
                        onClick={() => {
                            if (swiperRef.current) {
                                (swiperRef.current as any).slidePrev();
                            }
                        }}
                        className={`${styles.buttonControl} ${styles.buttonLeft}`}>
                        <Image src={ChevronLeft} alt='testi' />
                    </button>
                    <button
                        id='button-right'
                        onClick={() => {
                            if (swiperRef.current) {
                                (swiperRef.current as any).slideNext();
                            }
                        }}

                        className={`${styles.buttonControl} ${styles.buttonRight}`}
                    >
                        <Image src={ChevronRight} alt='testi' />
                    </button>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        onSwiper={(swiper: any) => {
                            if (swiper) {
                                swiperRef.current = swiper;
                            }
                        }}
                        modules={[Pagination, Navigation, A11y]}
                        className={`${styles.testimoniCardContainer}`}
                        navigation={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                    >

                        {
                            testimoniData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            width: 'fit-content',
                                        }}>
                                        <TestimoniCard
                                            name={item.name}
                                            description={item.content}
                                        />
                                    </SwiperSlide>
                                )
                            }
                            )
                        }
                    </Swiper>
                </div>
            </ContentContainer>
        </SectionContainer>
    )
}
