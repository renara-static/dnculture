import React from 'react'
type Props = {
    href: string,
    children: React.ReactNode,
}
export default function MediaSocial({ href, children }: Props) {
    return (
        // <a>MediaSocial</div>
        <a href={href}>
            {children}
        </a>
    )
}
