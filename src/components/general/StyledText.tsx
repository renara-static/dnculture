import Image from 'next/image'
import React from 'react'
import styles from '@/styles/general/styledText.module.scss'

type StyledTextProps = {
    src?: any,
    alt?: string,
    ornament?: React.ReactNode,
}

export default function StyledText({ src, alt, ornament }: StyledTextProps) {
    return (
        <div 
        className={styles.styledTextContainer}
        >
            {ornament}
            <Image src={src} alt={"styled image"} className={styles.styledText} />
        </div>
    )
}
