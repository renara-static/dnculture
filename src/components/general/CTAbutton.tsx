import React from 'react'
import styles from '@/styles/general/CTA.module.scss'
import Image from 'next/image'
import Arrow from '@/assets/images/icon/arrow-right-circle.svg'
import variables from '@/styles/globals.module.scss'
import { type } from 'os'
import { styled } from '@stitches/react';
import Link from 'next/link'



type CTAbuttonProps = {
    url?: string,
    children?: React.ReactNode,
    color?: string,
    outline?: boolean,
    className?: string,
}

export default function CTAbutton({ url, children, color, outline, className }: CTAbuttonProps) {
    return (
        <a href={url} className={`${styles.GeneralbtnCTA} ${className}`}
            target='_blank'
        >
            {children}
            <Image src={Arrow} alt="Arrow" className={styles.arrow} />
        </a>
    )
}
