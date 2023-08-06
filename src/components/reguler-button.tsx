// import React from 'react'
import React from 'react'
import './main.scss'
import { styled } from '@stitches/react';
import variables from '@/styles/globals.module.scss'

const Btn = styled('button', {
    variants: {
        variant: {
            primary: {
                backgroundColor: variables.primaryColor,
            },
            secondary: {
                backgroundColor: variables.secondaryColor,
            },
        },
    },
});


export default function Button() {
    return (
        <Btn>reguler-button</Btn>
    )
}
