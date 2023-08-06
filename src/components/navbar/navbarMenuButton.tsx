import React from 'react'
import Link from 'next/link'
import styles from '@/styles/general/navbar.module.scss'
import Image from 'next/image'

type NavbarMenuButtonProps = {
    link?: any,
    text?: string,
    children?: React.ReactNode,
    image?: any,
    color?: string,
    onclick?: any,
}

export default function NavbarMenuButton({ link, image, children, color, onclick }: NavbarMenuButtonProps) {
    // const href = new URL('/')
    return (
        <Link href={link} className={styles.NavbarButton}
    
        onClick={onclick}
        >
            <div className={styles.imageContainer} style={{
                backgroundColor: color,
            }}>
                <Image src={image} alt={`Icon ${children}`} className={styles.image} />
            </div>
            {/* <Image src={icon} alt='icon' /> */}
            <span>{children}</span>
        </Link>
    )
}
