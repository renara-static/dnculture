import { styled } from '@stitches/react';
import variables from '@/styles/globals.module.scss'
import Image from 'next/image';
import styles from '@/styles/product/productCard.module.scss';
import SampleImg from '@/assets/images/product/product-sample.png';
import Arrow from '@/assets/images/icon/arrow-right-large.svg';

const Label = styled('div', {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    borderRadius: '3.0625rem',
    padding: '0.5rem 1.5rem',
    alignItems: 'center',
    backgroundColor: variables.accentColor,
    color: "#000",
    fontSize: 'clamp(0.75rem, 2.5vw, 2rem)',
    fontFamily: variables.fontFamily,
    fontWeight: 'bold',
    display: 'none',
    zIndex: 1,
    variants: {
        variant: {
            'latest': {
                display: 'block',
            }
        },

    },
});




type ProductCardProps = {
    data?: any,
    variant?: string | any,
}

export default function ProductCard({ data, variant }: ProductCardProps) {
    return (
        <div
            id='Product-Card-Container'
            className={styles.productCard}
            style={{
                backgroundColor: variables.secondaryColor,
                border: variant === 'latest' ? `2px solid ${variables.accentColor}` : 'none',
            }}>
            <Label variant={variant} className={styles.Label}>
                Baru!
            </Label>
            <Image alt={data?.title} src={SampleImg} className={`${styles.productImage} ${styles.realfaImage}`} />
            <Image alt={data?.title} src={SampleImg} className={`${styles.productImage} ${styles.shadowImage}`} />
            <div className={styles.productInfo}>
                <span
                    className={styles.productCategory}
                >{data?.category}</span>
                <a
                    href=''
                    className={styles.productTitle}>
                    {data?.title}
                    <Image src={Arrow} alt='arrow' className={styles.arrow} />
                </a>
            </div>
        </div>
    )
}