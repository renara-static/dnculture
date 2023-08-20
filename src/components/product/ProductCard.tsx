import { styled } from '@stitches/react';
import variables from '@/styles/globals.module.scss'
import Image from 'next/image';
import styles from '@/styles/product/productCard.module.scss';
import SampleImg from '@/assets/images/product/product-sample.png';
import Arrow from '@/assets/images/icon/arrow-right-large.svg';

type ProductCardProps = {
    // item?: any,
    variant?: string | any,
    style?: React.CSSProperties,
}

export default function ProductCard(

    item: any,
    { variant, style }: ProductCardProps) {
    return (
        <div className={styles.productCard}
            style={{
                ...style
            }}
        >
            {
                item ?
                    <Image
                        alt='test'
                        src={item.image}
                        className={styles.productImage} />

                    : <Image
                        alt='test'
                        src={SampleImg}
                        className={styles.productImage} />
            }
        </div>
    )
}