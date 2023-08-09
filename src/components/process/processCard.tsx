import React from 'react'
import styles from '@/styles/process/processCard.module.scss'

type ProcessCardProps = {
    content: string,
    index: number
}

export default function ProcessCard({ content, index }: ProcessCardProps) {
    return (
        <div
        className={styles.processCard}
        >
            <div
            className={styles.processCardIndex}
            >
                {index}
            </div>
            <div
            className={styles.processCardContent}
            >
                {content}
            </div>
        </div>
    )
}
