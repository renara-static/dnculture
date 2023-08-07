import React from 'react'
import variables from '@/styles/globals.module.scss'
import styles from '@/styles/home/aboutSection.module.scss'
import { TextHighlight as V } from '../general/TextHighlight';
import SectionTitle from '../general/SectionTitle';
import AboutTitleBackground from '@/assets/images/background/About.webp';
import SectionContainer from '../general/SectionContainer';
import ContentContainer from '../general/ContentContainer';
import StyledText from '../general/StyledText';
import { companyData } from '@/assets/data/companyData';


export default function AboutSection() {
    const companyName = <V>{companyData?.name}</V>
    return (
        <SectionContainer
            id='about'
            marginBottom={true}
            paddingBlock={true}
        >
            <ContentContainer>
                <div className={styles.aboutContainer}>
                    <StyledText
                        src={AboutTitleBackground}
                    />
                    <SectionTitle>
                        Tentang Kami
                    </SectionTitle>
                    <div className={styles.aboutContent}>
                        {companyName} adalah unit usaha yang melayani titip beli berbagai barang dari luar negeri, khususnya di dunia otomotif. Anda bisa mendapatkan produk-produk berkualitas tinggi yang sesuai dengan selera dan kebutuhan Anda, mulai dari aksesoris, spare part, hingga motor impian Anda. Namun tidak menutup kemungkinan untuk memberikan apa yang Anda inginkan tanpa harus ribet. Anda cukup duduk manis dan menunggu barang datang. {companyName}  akan mengurus semua proses pembelian, pengiriman, dan bea cukai dengan profesional dan aman. {companyName} adalah solusi terbaik untuk Anda yang ingin belanja barang luar negeri tanpa repot.
                    </div>
                </div>
            </ContentContainer>
        </SectionContainer>
    )
}
