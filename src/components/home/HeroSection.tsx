import React from 'react'
import Image from 'next/image'
import styles from '@styles/home/heroSection.module.scss'
import Background from '@assets/images/background/hero-background.svg'
import CTAbutton from '@components/general/CTAbutton'
import SectionContainer from '../general/SectionContainer'

export default function HeroSection() {
    return (
        <SectionContainer
            id='hero'
            paddingBlock={true}
            marginBottom={true}
        >
            <div id='hero-section-container'
                className={styles.heroSectionContainer}
            >
                <Image src={Background} alt='background' className={styles.background} />
                <h1
                    className={styles.heroSectionTitle}>
                    Temukan beragam banyak pilihan slime hanya di sini!
                </h1>
                <CTAbutton url=''>
                    Beli Sekarang
                </CTAbutton>
            </div>
        </SectionContainer>
    )
}
