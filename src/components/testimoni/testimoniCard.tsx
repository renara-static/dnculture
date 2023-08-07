import React from 'react'
import styles from '@/styles/testimoni/testimoniCard.module.scss'
import QuotIcon from '@/assets/images/icon/quot.svg'
import Image from 'next/image'

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
            <div
                className={styles.testimoniCardHeader}
            >
                <Image src={QuotIcon} alt={'testimoni'} className={styles.testimoniCardImage} />
                <div
                    className={styles.testimoniCardHeaderContent}
                >
                    <h1>{name}</h1>
                    <p>Customer</p>
                </div>
            </div>
            <p
            className={styles.testimoniCardDescription}
            > 
                {description}
            </p>
        </div>
    )
}
