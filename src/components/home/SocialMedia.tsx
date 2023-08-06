import React from 'react'
import styles from '@/styles/home/socialMediaSection.module.scss'
import variables from '@/styles/globals.module.scss'
import Arrow from '@/assets/images/icon/arrow-right-circle.svg'
import Instagram from '@/assets/images/background/Instagram-background.png'
import Tiktok from '@/assets/images/background/tiktok-background.png'
import SocialMediaBg from '@/assets/images/background/social-media-background.svg'
import Image from 'next/image'
import CTAbutton from '../general/CTAbutton'
import SectionContainer from '../general/SectionContainer'

export default function SocialMediaSection() {
    return (

        <SectionContainer
            id='socialmedia'
        >
            <div id='socialmedia-container' className={styles.socialMediaSectionContainer}>
                <Image src={SocialMediaBg} alt='background' className={styles.MainBackground} />
                <div className={styles.contentLeft}>
                    <Image src={Instagram} alt='instagram' className={`${styles.background} ${styles.instagram}`} />
                    <Image src={Tiktok} alt='tiktok' className={`${styles.background} ${styles.tiktok}`} />
                </div>
                <div className={styles.contentRight}>
                    <h1>Jangan lupa juga untuk follow media sosial kita!</h1>
                    <div className={styles.CTAContainer}>
                        <CTAbutton url='https://www.instagram.com/slime.id/'>
                            Instagram
                        </CTAbutton>
                        <CTAbutton url='https://www.tokopedia.com/slime-id'>
                            Tiktok
                        </CTAbutton>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}
