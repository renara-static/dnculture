import React from 'react'
import styles from '@/styles/testimoni/testimoniCard.module.scss'


type TestimoniCardProps = {
    name?: string,
    description?: string,
    ref?: React.Ref<HTMLDivElement>,
}

export default function TestimoniCard({ name, description, ref }: TestimoniCardProps) {
    return (
        <div
            // ref={ref}
            className={`${styles.testimoniCard}`}
        >
            <h1>{name}</h1>
            <p>
                {description}
            </p>
        </div>
    )
}
