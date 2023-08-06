import React from "react";
import ProductCard from "../product/ProductCard";
import { productData } from "@/assets/data/productData";
import styles from '@/styles/home/productSection.module.scss';
import variables from '@/styles/globals.module.scss';
import SectionTitle from "../general/SectionTitle";
import ProductLogo from '@/assets/images/icon/product-icon.svg';
import SectionContainer from "../general/SectionContainer";


export default function ProductSection() {
    return (
        <SectionContainer
            id='product'
            paddingBlock={true}
            marginBottom={true}
        >
            <div
                className={styles.productSectionContainer}
            >
                <SectionTitle image={ProductLogo} color="rgba(255, 59, 153, 1)"
                    buttonCTA={true}
                    CTAContent="Lihat Lainnya"
                >
                    Produk Kita
                </SectionTitle>
                <div className={styles.CardContainer}>
                    {productData?.map((item, i) => {
                        if (i === 0)
                            return <ProductCard key={i} data={item} variant={'latest'} />
                        else
                            return <ProductCard key={i} data={item} />
                    })
                    }
                </div>
            </div>
        </SectionContainer>
    )
}