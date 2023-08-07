import React from 'react'
import styles from '@/styles/general/contentContainer.module.scss'

type ContentContainerProps = {
    children?: React.ReactNode,
}

export default function ContentContainer({ children }: ContentContainerProps) {
    return (
        <div
            id='content-Container'
            className={styles.contentContainer}
        >
            {children}
        </div>
    )
}
