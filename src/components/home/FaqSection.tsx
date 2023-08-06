import React from 'react'
import SectionTitle from '../general/SectionTitle'
import FaqLogo from '@/assets/images/icon/faq-icon.svg'
import variables from '@/styles/globals.module.scss'
import styles from '@/styles/home/faqSection.module.scss'
import FaqAccordion from '../faq/faqAccordion'
import { FAQData } from '@/assets/data/FAQData'
import SectionContainer from '../general/SectionContainer'

export default function FaqSection() {
    return (
        <SectionContainer
            id='faq'
            paddingBlock={true}
            marginBottom={true}
        >
            <SectionTitle image={FaqLogo} color='rgba(255, 136, 0, 1)'
            buttonCTA={true}
            CTAContent='Ajukan Pertanyaan'
            >
                FAQ
            </SectionTitle>
            <div className={styles.faqSectionContainer}>
                {
                    FAQData?.map((item, i) => {
                        return <FaqAccordion key={i} data={item} />
                    }
                    )
                }
            </div>
            s</SectionContainer>
    )
}
