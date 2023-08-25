import React from 'react'
import Link from 'next/link'
import styles from '@/styles/general/navbar.module.scss'
import Image from 'next/image'
import { TextHighlight as V } from '../general/TextHighlight'
import { useRouter } from 'next/router'
import variables from '@/styles/globals.module.scss'

type NavbarMenuButtonProps = {
    link?: any,
    text?: string,
    children?: React.ReactNode,
    image?: any,
    color?: string,
    onclick?: any,
}

export default function NavbarMenuButton({ link, image, children, color, onclick }: NavbarMenuButtonProps) {
    const router = useRouter()
    return (
        <Link
            href={link}
            className={styles.NavbarButton}
            onClick={onclick}
        >
            <span
                style={{
                    marginRight: 10,
                    color: router.asPath === link ? variables.accentColor : variables.textColorLight,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                }}
            >{children}</span>
        </Link>
    )
}
