import ContentContainer from '@/components/general/ContentContainer'
import SectionContainer from '@/components/general/SectionContainer'
import React from 'react'
import styles from '@/styles/process/processPage.module.scss'

export default function ProcessPage() {
    return (
        <div>
            <SectionContainer
                marginTop={true}
                marginBottom={true}
                paddingBlock={true}
                id='process-page'
            >
                <ContentContainer>
                    <div
                    className={styles.processPageContainer}
                    >
                    </div>
                </ContentContainer>
            </SectionContainer>
        </div>
    )
}