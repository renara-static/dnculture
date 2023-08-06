import React from 'react'
import variables from '@/styles/globals.module.scss'
import styles from '@/styles/home/aboutSection.module.scss'
import { styled } from '@stitches/react';
import SectionTitle from '../general/SectionTitle';
import AboutLogo from '@/assets/images/icon/about-icon.svg';
import SectionContainer from '../general/SectionContainer';
const V = styled('div', {
    color: variables.accentColor,
    fontWeight: 'bold',
    display: 'inline',
    variants: {
        variant: {
            primary: {
                backgroundColor: variables.accentColor,

            },
            secondary: {
                backgroundColor: variables.secondaryColor,
            },
        },
    },
});

export default function AboutSection() {
    return (
        <SectionContainer
            id='about'
            marginBottom={true}
            paddingBlock={true}
        >
            <div className={styles.aboutContainer}>
                <SectionTitle image={AboutLogo} color='rgba(255, 204, 0, 1)'>
                    Tentang Kita
                </SectionTitle>
                <div className={styles.aboutContent}>
                    Nama <V>PickYourSlime</V> memberikan pengertian sebagai  “pilihlah slimemu”. <V>PickYourSlime</V> mempunyai tujuan untuk membuat banyak variasi slime yang dapat disukai oleh banyak pelanggan, sehingga pelanggan dapat bebas memilih slime yang mereka sukai.
                    <br />
                    <br />
                    Maka itu, <V>PickYourSlime</V> memberikan dan membuat banyak variasi slime yang dapat dipilih sesuai keinginan pelanggan.
                </div>
            </div>
        </SectionContainer>
    )
}
