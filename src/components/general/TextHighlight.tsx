import { styled } from '@stitches/react';
import React from 'react'
import variables from '@/styles/globals.module.scss'

export const TextHighlight = styled('div', {
    color: variables.accentColor,
    fontWeight: 'bold',
    display: 'inline',
});