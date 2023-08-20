import React from "react";
import ProductCard from "../product/ProductCard";
import { productData } from "@/assets/data/productData";
import styles from '@/styles/home/productSection.module.scss';
import variables from '@/styles/globals.module.scss';
import SectionTitle from "../general/SectionTitle";
import ProductTitleBackground from '@/assets/images/background/products.webp';
import SectionContainer from "../general/SectionContainer";
import ContentContainer from "../general/ContentContainer";
import StyledText from "../general/StyledText";
import Image from "next/image";
import ProductTitleOrnament from '@/assets/images/background/product-ornament.webp';


export default function ProductSection() {
    return (
        <SectionContainer
            id='product'
            paddingBlock={true}
            marginBottom={true}
        >
            <ContentContainer>
                <div
                    className={styles.productSectionContainer}
                >
                    <StyledText
                        src={ProductTitleBackground}
                        ornament={<>
                            <Image alt="test" src={ProductTitleOrnament}
                                className={styles.ProductTitleOrnament}
                            />
                        </>}
                    />
                    <SectionTitle>
                        Produk Kami
                    </SectionTitle>
                    <div className={styles.CardContainer}>
                        {productData?.map((item, i) => {
                            return <ProductCard key={i}
                                {...item}
                            />
                        })
                        }
                    </div>
                </div>
            </ContentContainer>
        </SectionContainer>
    )
}