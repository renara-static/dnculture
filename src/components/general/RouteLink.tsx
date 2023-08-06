import React from 'react'
import Link from 'next/link'
import variables from '@/styles/globals.module.scss'


type Props = {
    children: React.ReactNode,
    href: string,
}

export default function RouteLink({ children, href, ...props }: Props) {
    return (
        <Link href={href} style={{
            color: variables.primaryColor,
            textDecoration: 'none',
            pointerEvents: 'all',
            cursor: 'pointer',
        }} {...props
            }>
            {children}
        </Link>
    )
}
