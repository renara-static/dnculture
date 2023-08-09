import ContentContainer from '@/components/general/ContentContainer'
import SectionContainer from '@/components/general/SectionContainer'
import React from 'react'
import styles from '@/styles/process/processPage.module.scss'
import SectionTitle from '@/components/general/SectionTitle'
import processData from '@/assets/data/processData'
import ProcessCard from './processCard'

export default function ProcessSection() {
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
                        <SectionTitle>
                            Bagaimana kita
                            <br />
                            Memproses pemesanan barang?
                        </SectionTitle>
                        <div>
                            {
                                processData.map((data, index) => {
                                    return (
                                        <ProcessCard key={data.index} content={data.content} index={data.index} />
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                </ContentContainer>
            </SectionContainer>
        </div>
    )
}