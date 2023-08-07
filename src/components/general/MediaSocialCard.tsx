import Image from 'next/image'
import React from 'react'
import CTAbutton from './CTAbutton'
import Bukalapak from '@/assets/images/icon/bukalapak.svg'
import style from '@/styles/mediaSocial/mediaSocialCard.module.scss'

type Props = {
    href?: string,
    children?: React.ReactNode,
}   

export default function MediaSocial({ href, children }: Props) {
    return (
        <div
            id='Media-Social-Card'
            className={style.mediaSocialCard}
        >
            <Image
                src={href ? href : Bukalapak}
                alt={"Media Social"}
                className={style.mediaSocialImage}
            />
            <div
                className={style.mediaSocialText}
            >
                Bukalapak
            </div>
            <CTAbutton
                className={style.mediaSocialButton}
            >
                Lihat Produk
            </CTAbutton>
        </div>
    )
}
