import React from 'react'
import NavbarMobile from './navbarMobile'
import NavbarDesktop from './navbarDesktop'
import navbarStyle from '@/styles/general/navbar.module.scss'
import variables from '@/styles/globals.module.scss'


import HomeSectionData from '@/assets/data/HomeSectionData'

export default function Navbar() {
    return (
        <>
            <div id='Navbar-Parent' style={{
                position: 'fixed',
                top: '0',
                left: '0',
                zIndex: 4,
                width: '100%',
                // height: variables.navbarHeight,
                background: 'rgba(30, 30, 30, 0.50)',
                backdropFilter: 'blur(31px)',
            }}>
                <div id='Navbar-Mobile-Container' className={navbarStyle.NavbarMobile}>
                    <NavbarMobile data={HomeSectionData} />
                </div>
                <div id='Navbar-Desktop-Container' className={navbarStyle.NavbarDesktop}>
                    <NavbarDesktop data={HomeSectionData} />
                </div>
            </div >
            <div style={{
                height: variables.navbarHeight,
                width: '100%',
                background: 'rgba(30, 30, 30, 0.50)',
            }}>
                placeholder
            </div>
        </>
    )
}