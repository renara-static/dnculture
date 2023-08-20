import React from 'react'
import NavbarMobile from './navbarMobile'
import NavbarDesktop from './navbarDesktop'
import navbarStyle from '@/styles/general/navbar.module.scss'
import variables from '@/styles/globals.module.scss'


import NavData from '@/assets/data/NavigationData'

export default function Navbar() {
    return (
        <>
            <div id='Navbar-Parent' 
            
            className={navbarStyle.NavbarParent}
            >
                <div id='Navbar-Mobile-Container' className={navbarStyle.NavbarMobile}>
                    <NavbarMobile data={NavData} />
                </div>
                <div id='Navbar-Desktop-Container' className={navbarStyle.NavbarDesktop}>
                    <NavbarDesktop data={NavData} />
                </div>
            </div >
            <div style={{
                opacity: 0,
                height: variables.navbarHeight,
                width: '100%',
            }}>
                placeholder
            </div>
        </>
    )
}