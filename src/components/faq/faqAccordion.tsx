import React, { useState } from 'react'
import styles from '@/styles/faq/FaqAccordion.module.scss'
import classNames from 'classnames';
import variables from '@/styles/globals.module.scss'

type Props = {
    data: {
        title: string,
        content: string,
    },
}

export default function FaqAccordion({ data }: Props) {
    const [active, setActive] = useState(false);
    const toogle = () => {
        setActive(!active);
    }

    return (
        <div className={`${styles.FaqAccordion} ${active && styles.active}`} onClick={toogle}>

            <div className={styles.FaqAccordionTitle}>
                <h3>{data.title}</h3>
                <svg
                    className={classNames(styles.FaqAccordionIcon, active && styles.active)}
                    xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5858 18.5858C15.3668 17.8047 16.6332 17.8047 17.4142 18.5858L24 25.1716L30.5858 18.5858C31.3668 17.8047 32.6332 17.8047 33.4142 18.5858C34.1953 19.3668 34.1953 20.6332 33.4142 21.4142L25.4142 29.4142C25.0391 29.7893 24.5304 30 24 30C23.4696 30 22.9609 29.7893 22.5858 29.4142L14.5858 21.4142C13.8047 20.6332 13.8047 19.3668 14.5858 18.5858Z" fill={variables.tertiaryColor} />
                </svg>
            </div>
            <div className={`${styles.FaqAccordionContent} ${active && styles.active}`}>
                {data.content}
            </div>
        </div>
    )
}
