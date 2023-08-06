import React from 'react'
import Logo from './../../../src/assets/images/general/company-logo.svg'
import Image from 'next/image'
import styles from '@/styles/general/companyLogo.module.scss'

export default function CompanyLogo({ }) {
    return (
        // <>CompanyLogo</div>
        <Image src={Logo} alt='logo' className={`${styles.logo}`} />
    )
}
