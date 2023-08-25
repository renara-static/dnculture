import React from 'react'
import variables from '../../../styles/globals.module.scss'
import { useState } from 'react'
import CompanyLogo from '@/components/general/CompanyLogo';
import styles from '@styles/navbar/navbarMobile.module.scss'
import MobileNavIcon from '@/assets/images/icon/mobile-nav-icon.svg';
import MobileNavIconClose from '@/assets/images/icon/mobile-nav-icon-close.svg';
import Image from 'next/image';
import NavbarMenuButton from '@/components/navbar/navbarMenuButton';


export default function NavbarMobile({ data }: any) {
    const [showMenu, setShowMenu] = useState(false);
    // console.log(data)
    const toogleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (<>
        <div style={{
            height: variables.navbarHeight,
        }}
            className={styles.NavbarMobile}
        >
            <CompanyLogo />
            {/* navbar button to open container */}
            <button onClick={() => setShowMenu(!showMenu)}
                className={styles.NavbarMobileButton}
            >
                <div
                    className={styles.NavbarMobileButtonContainer}
                >
                    <Image src={showMenu ? MobileNavIconClose : MobileNavIcon}
                        className={styles.NavbarMobileButtonIcon}
                        alt="Mobile Nav Icon" />
                </div>
            </button>
        </div>
        <div id='Navbar-Mobile-Menu-Container'
            className={styles.NavbarMobileMenuContainer}
            style={{
                opacity: showMenu ? 1 : 0,
                pointerEvents: showMenu ? 'all' : 'none',
                transition: 'opacity 0.3s ease-in-out',
                position: showMenu ? 'static' : 'absolute',
            }}
        >
            {data?.map((item: any) => {
                return (
                    <NavbarMenuButton
                        onclick={toogleMenu}
                        key={item.id} link={item.path} image={item.image} color={item.bg}>
                        {item.name}
                    </NavbarMenuButton>
                )
            })
            }
        </div>
    </>
    )
}
