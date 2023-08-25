import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from './layout/layout'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ProductSection from '@/components/home/ProductSection'
import TestimoniSection from '@/components/home/TestimoniSection'
import SocialMediaSection from '@/components/home/SocialMediaSection'
import { companyData } from '@/assets/data/companyData'
import FaqSection from '@/components/home/FaqSection'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{companyData.name}</title>
        <meta name="description" content={companyData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="lKroTJqn-Kss6E9Z-shB-0x6UCezzd8ytPQeTTzJsmE" />
      </Head>
      <main
        style={{
          overflowX: 'hidden',
        }}
      >
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <SocialMediaSection />
        <TestimoniSection />
      </main>
    </>
  )
}

