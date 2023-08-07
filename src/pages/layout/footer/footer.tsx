import React from 'react'
import variables from '../../../styles/globals.module.scss'
import FooterAddress from './footerAddress'
import FooterContact from './footerContact'
import styles from '@/styles/footer/footer.module.scss'
import { companyData } from '@/assets/data/companyData'

export default function Footer() {
    return (
        <div style={{
            // height: '100px',
            width: '100%',
            backgroundColor: variables.secondaryColor,
        }}
            className={styles.footerContainer}
        >
            <div
            className={styles.footerCopyRight}
            >
                © 2023 {companyData.name}. All rights reserved.
            </div>
            <div
            className={styles.footerManagedBy}
            >
                Managed by @renara.house
            </div>
        </div>
    )
}
