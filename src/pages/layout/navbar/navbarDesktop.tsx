import React from 'react'
import NavbarMobile from './navbarMobile'
import variable from '@/styles/globals.module.scss'
import Link from 'next/link'
import RouteLink from '@/components/general/RouteLink'
import CompanyLogo from '@/components/general/CompanyLogo'
import NavbarMenuButton from '@/components/navbar/navbarMenuButton'
import SectionContainer from '@/components/general/SectionContainer'
import CTAbutton from '@/components/general/CTAbutton'
import { companyData } from '@/assets/data/companyData'

export default function NavbarDesktop({ data }: any) {
    return (<>

        <SectionContainer
            backgroundColor={'inherit'}
            style={{
                height: variable.navbarHeight,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxHeight: variable.navbarHeight,
                overflow: 'hidden',
            }}
        >
            <div id='Navbar-Desktop-Left'>
                <RouteLink href='/'>
                    <CompanyLogo />
                </RouteLink>
            </div>
            <div id='Navbar-Desktop-Right' style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2.5rem',
            }}>
                {data?.map((item: any) => {
                    return (
                        <div key={item.id} style={{
                        }}>
                            <NavbarMenuButton link={item.path} image={item.image} color={item.bg}>
                                {item.name}
                            </NavbarMenuButton>
                        </div>
                    )
                })
                }
                <CTAbutton
                    url={companyData.contact}
                >
                    Contact Us
                </CTAbutton>
            </div>
        </SectionContainer>
    </>
    )
}