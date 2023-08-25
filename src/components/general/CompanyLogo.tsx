import React from 'react'
import Logo from './../../../src/assets/images/icon/companyLogo.webp'
import Image from 'next/image'
import styles from '@/styles/general/companyLogo.module.scss'
import { companyData } from '@/assets/data/companyData'

export default function CompanyLogo() {
    return (

        <>
            <Image src={Logo} alt="Logo"

                style={{
                    width: "100px",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                }}
            />
        </>
    )
}
