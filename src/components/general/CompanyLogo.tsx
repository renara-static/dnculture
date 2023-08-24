import React from 'react'
import Logo from './../../../src/assets/images/general/company-logo.svg'
import Image from 'next/image'
import styles from '@/styles/general/companyLogo.module.scss'
import { companyData } from '@/assets/data/companyData'

export default function CompanyLogo() {
    return (
        <span
            className='company-logo
            text-mainColor
            font-bold
            text-[4rem]
            md:text-[2.2rem]'
        >
            {companyData.name}
        </span>
    )
}
