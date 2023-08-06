import { PropsWithChildren } from 'react'
import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

export default function Layout({ children }: PropsWithChildren<any>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
