import React from 'react'
import styles from '@/styles/general/CTA.module.scss'
import Image from 'next/image'
import Arrow from '@/assets/images/icon/arrow-right-circle.svg'
import variables from '@/styles/globals.module.scss'
import { type } from 'os'
import { styled } from '@stitches/react';


const LinkBtn = styled('a', {
    backgroundColor: variables.accentColor,
    variants: {
        'outline': {
            true: {
                backgroundColor: 'transparent',
                border: '1px solid',
                borderColor: variables.accentColor,
                color: variables.accentColor,
                '&:hover': {
                    backgroundColor: variables.accentColor,
                    color: variables.primaryColor,
                },
            },
            false: {
                backgroundColor: variables.accentColor,
                color: variables.primaryColor,
                '&:hover': {
                    backgroundColor: variables.primaryColor,
                    color: variables.accentColor,
                }
            },
        },
    },
})

type CTAbuttonProps = {
    url?: string,
    children?: React.ReactNode,
    color?: string,
    outline?: boolean,
}

export default function CTAbutton({ url, children, color, outline }: CTAbuttonProps) {
    return (
        <LinkBtn
            outline={outline}
            href={url}
            className={styles.GeneralbtnCTA}
            style={{
                borderColor: color ? color : variables.accentColor,
                color: color ? color : "black",
            }}
        >
            {children}
            <svg 
                 viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="arrow-right-circle">
                    <path id="union-1" fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.2929 9.70711C10.9024 9.31658 10.9024 8.68342 11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071C10.9024 15.3166 10.9024 14.6834 11.2929 14.2929L12.5858 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H12.5858L11.2929 9.70711Z" fill={outline ? (color ? color : variables.accentColor) : (color ? color : "black")} />
                </g>
            </svg>
        </LinkBtn>
    )
}
