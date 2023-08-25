import Image from 'next/image'
import React from 'react'
import CTAbutton from './CTAbutton'
import Bukalapak from '@/assets/images/icon/bukalapak.svg'
import style from '@/styles/mediaSocial/mediaSocialCard.module.scss'

type Props = {
    // href?: string,
    // children?: React.ReactNode,
    data?: {
        title: string,
        logo: string,
        url: string,
    },
}

export default function MediaSocial(data: any) {
    // console.log(data);
    return (
        <div
            id='Media-Social-Card'
            className={style.mediaSocialCard}
            style={{
                backgroundImage: data.background
            }}
        >
            <Image
                src={data.logo}
                alt={"Media Social"}
                className={style.mediaSocialImage}
            />
            <div
                className={style.mediaSocialText}
            >
                {data.title}
            </div>
            <CTAbutton
                url={data.href}
                className={style.mediaSocialButton}
            >
                Lihat Produk
            </CTAbutton>
        </div>
    )
}
