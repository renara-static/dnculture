import React from 'react'
import variables from '../../../styles/globals.module.scss'
import FooterAddress from './footerAddress'
import FooterContact from './footerContact'
import styles from '@/styles/footer/footer.module.scss'
        
export default function Footer() {
    return (
        <div style={{
            height: '100px',
            width: '100%',
            backgroundColor: variables.accentColor,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}
            className={styles.footerContainer}
        >
            © 2023 pickyourslime.id
        </div>
    )
}
