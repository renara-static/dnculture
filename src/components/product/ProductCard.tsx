import { styled } from '@stitches/react';
import variables from '@/styles/globals.module.scss'
import Image from 'next/image';
import styles from '@/styles/product/productCard.module.scss';
import SampleImg from '@/assets/images/product/product-sample.png';
import Arrow from '@/assets/images/icon/arrow-right-large.svg';

type ProductCardProps = {
    data?: any,
    variant?: string | any,
    style?: React.CSSProperties,
}

export default function ProductCard({ data, variant, style }: ProductCardProps) {
    return (
        <div className={styles.productCard}
            style={{
                ...style
            }}
        >
            <Image src={SampleImg} alt="Product Sample" className={styles.productImage} />
        </div>
    )
}