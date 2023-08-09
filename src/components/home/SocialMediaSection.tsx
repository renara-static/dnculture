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
import ContentContainer from '../general/ContentContainer'
import MediaSocial from '../general/MediaSocialCard'
import { companyData } from '@/assets/data/companyData'

export default function SocialMediaSection() {
    return (

        <SectionContainer
            id='socialmedia'
        >
            <ContentContainer>
                <div id='socialmedia-container' className={styles.socialMediaSectionContainer}>
                    <div className={styles.Header}>
                        <div
                            className={styles.HeaderTitle}
                        >
                            <span
                                className={styles.HeaderTitleTop}
                            >
                                Mau lihat lebih lanjut?
                            </span>
                            <br />
                            <span
                                className={styles.HeaderTitleBottom}
                            >
                                Cek media sosial kita
                            </span>
                        </div>
                        <div
                            className={styles.HeaderCTA}>
                            Mau ngobrol-ngobrol dulu?
                            <CTAbutton>
                                WhatsApp
                            </CTAbutton>
                        </div>
                    </div>
                    <div className={styles.socialCardList}>
                        {
                            companyData.social.map((data, index) => {
                                return <MediaSocial key={index}
                                    {...data}
                                />
                            }
                            )
                        }
                    </div>
                </div>
            </ContentContainer>
        </SectionContainer>
    )
}
