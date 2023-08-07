import React from 'react'
import styles from '@/styles/general/sectionTitle.module.scss'
import variables from '@/styles/globals.module.scss'
import Image from 'next/image'
import CTAbutton from './CTAbutton'


type SectionTitleProps = {
    title?: string | any,
    subtitle?: string,
    children?: React.ReactNode,
    image?: any,
    // color: string,
    buttonCTA?: boolean,
    CTAContent?: string,
    CTAurl?: string,
}

export default function SectionTitle({ title, subtitle, children, image }: SectionTitleProps) {
    return (
        <div className={styles.sectionTitleContainer}>
            <div className={styles.titleContainerLeft}>
                {/* <Image style={{
                    backgroundColor: color,
                }}
                    src={image}
                    alt={title}
                    className={styles.titleLogo}
                /> */}
                <span className={styles.titleText}>
                    {children}
                </span>
            </div>
            <div
                className={styles.CTAContainer}
            >
                {/* {buttonCTA &&
                    <CTAbutton url={CTAurl} color={color}
                        outline={true}
                    >
                        {CTAContent}
                    </CTAbutton>
                } */}
            </div>
        </div>
    )
}
