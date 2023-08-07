import React from 'react'
import Image from 'next/image'
import styles from '@styles/home/heroSection.module.scss'
import Background from '@assets/images/background/hero-background.svg'
import CTAbutton from '@components/general/CTAbutton'
import SectionContainer from '../general/SectionContainer'
import SectionTitle from '../general/SectionTitle'
import ContentContainer from '../general/ContentContainer'
import ProductCard from '../product/ProductCard'
// for hero right section
import HelmetIlust from '@assets/images/ilust/Helmet.svg'
import MotorIlust from '@assets/images/ilust/Motor.svg'
import JacketIlust from '@assets/images/ilust/Jacket.svg'
// bg 
// import Ornament from '@assets/images/background/radial.svg'
import CarbonBg from '@assets/images/background/carbon.svg'
import RadialBg from '@assets/images/background/radial.svg'
import Ambientornamment from '@assets/images/background/ambient-ornament.png'
import { companyData } from '@/assets/data/companyData'
import { TextHighlight as V } from '../general/TextHighlight'


function SectionRight() {
    return (
        <div
            className={styles.heroSectionRight}
        >
            {/* <Image className={styles.ornament} src={Ornament} alt="Helmet" /> */}
            <div
                className={styles.sectionRightColumn}
            >
                <Image className={styles.svg} src={JacketIlust} alt="Jacket" />
            </div>
            <div
                className={styles.sectionRightColumn}>
                <ProductCard />
                <ProductCard />
                <Image className={styles.svg} src={MotorIlust} alt="Motor" />
            </div>
            <div
                className={styles.sectionRightColumn}>
                <Image className={styles.svg} src={HelmetIlust} alt="Helmet" />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}


export default function HeroSection() {
    return (
        <SectionContainer
            id='hero'
            paddingBlock={true}
            marginBottom={true}
            ornament={
                <div
                    className={styles.ornamentContainer}
                >
                    <Image src={CarbonBg} alt="Carbon Background" className={styles.BG} />
                    <Image src={Ambientornamment} alt="Hero Background" className={styles.Ambient} />
                    <Image src={RadialBg} alt="Radial Background" className={styles.Ornament} />
                </div>
            }
        >
            <ContentContainer>
                <div id='hero-section-container'
                    className={styles.heroSectionContainer}
                >
                    <div className={styles.heroSectionLeft}>
                        <div className={styles.textSection}>
                            <SectionTitle>
                                Selamat Datang di <V>{companyData.name}</V>
                            </SectionTitle>
                            <div
                                className={styles.text}
                            >
                                Lorem ipsum dolor sit amet consectetur. Ullamcorper mauris amet massa odio. Interdum.
                            </div>
                        </div>
                        <div
                            className={styles.ctaSection}
                        >
                            <CTAbutton>
                                Lihat Produk
                            </CTAbutton>
                        </div>
                    </div>
                    <SectionRight />
                </div>
            </ContentContainer>
        </SectionContainer>
    )
}
