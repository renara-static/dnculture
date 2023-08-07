import React from 'react'
import styles from '@/styles/general/sectionContainer.module.scss'
import variables from '@/styles/globals.module.scss'
import CarbonBg from '@/assets/images/background/carbon.svg'
import Image from 'next/image'
import RadialBg from '@/assets/images/background/radial.svg'

type SectionContainerProps = {
    backgroundColor?: string,
    children?: React.ReactNode,
    className?: string,
    marginTop?: boolean,
    padding?: boolean,
    paddingBlock?: boolean,
    marginBottom?: boolean,
    id?: string,
    style?: React.CSSProperties,
    ornament?: React.ReactNode,
}

export default function SectionContainer({ backgroundColor, children, className, marginTop, padding, paddingBlock, marginBottom, style, id, ornament }: SectionContainerProps) {
    return (
        <div
            id={id}
            className={`${styles.sectionContainer} ${className}}`}
            style={{
                backgroundColor: backgroundColor ? backgroundColor : variables.primaryColor,
                marginTop: marginTop ? "3rem" : "0",
                paddingBlock: paddingBlock ? "3.75rem" : "0",
                marginBottom: marginBottom ? "6.25rem" : "0",
                position: "relative",
                ...style,
            }}
        >
            {ornament}
            {children}
        </div>
    )
}
