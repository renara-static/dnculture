import React from 'react'
import SectionContainer from '../general/SectionContainer'
import SectionTitle from '../general/SectionTitle'
import ContentContainer from '../general/ContentContainer'
import Productbg from '@/assets/images/product/0.jpg'
import Image from 'next/image'
import { TextHighlight as V } from '../general/TextHighlight'

export default function CompanySection() {
  return (
    <SectionContainer
      id='faq'
      paddingBlock={true}
      marginBottom={true}
      style={{
        marginBlock: '10rem',
        background: "black",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <ContentContainer
      >
        <SectionTitle
          // image={FaqLogo}
          buttonCTA={true}
          CTAContent='Ajukan Pertanyaan'
        // color='#000000'
        >
          Jaminan Barang Asli
        </SectionTitle>
        <div
          className='text-left
          text-[#B7B7B7]
          text-[1.825rem]
          my-[1rem]
          '
        >
          Anda <V>dijamin</V> akan menerima produk yang asli! <V>DN Culture</V> hanya melakukan pembelian melalui situs resmi, baik itu pembelian secara langsung, pemesanan produk kustom, atau menggunakan sistem "Pre-Order".
        </div>
        <hr
          className='
        opacity-20
        '
        />
        <div
          className='grid grid-cols-4 gap-[1rem] mt-8
          
          justify-center
          items-center
          '
        >
          {
            CompanyData?.map((item, i) => {
              return (

                <img
                  key={i}
                  src={item.image}
                  alt={item.title}
                  className='w-full
                    rounded-3xl
                    p-[2rem]
                    saturate-200
                    '
                />
              )
            })
          }
        </div>
      </ContentContainer>
    </SectionContainer>
  )
}


// company data


const CompanyData = [
  {
    id: 1,
    title: "Ebay-Logo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png",
  },
  {
    id: 2,
    title: "Amazon-Logo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
  },
  {
    id: 3,
    title: "Walmart-Logo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png",
  },
  {
    id: 4,
    title: "Target-Logo",
    image: "https://cdn.worldvectorlogo.com/logos/target.svg",
  },
  {
    id: 5,
    title: "Best-Buy-Logo",
    image: "https://cdn.worldvectorlogo.com/logos/best-buy-logo-2018-1.svg",
  },
  {
    id: 6,
    title: "Costco-Logo",
    image: "https://cdn.worldvectorlogo.com/logos/costco-wholesale.svg"
  },
  {
    id: 7,
    title: "Harley-Davidson-Logo",
    image: "https://cdn.worldvectorlogo.com/logos/harley-davidson-11.svg",
  },
  {
    id: 8,
    title: "Aliexpress-Logo",
    image: "https://cdn.worldvectorlogo.com/logos/aliexpress-logo.svg",
  },
  {
    id: 9,
    title: "Taobao-Logo",
    image: "https://cdn.worldvectorlogo.com/logos/taobao-logo.svg",
  },
  {
    id: 10,
    title: "Brembo-Logo",
    image: "https://cdn.worldvectorlogo.com/logos/brembo-logo-2.svg",
  },
  {
    id: 14,
    title: "AGV-Logo",
    image: "https://cdn.worldvectorlogo.com/logos/agv-brand-logo.svg",
  },
  {
    id: 15,
    title: "Revzilla-Logo",
    image: "https://asset.brandfetch.io/iddx0cpoOb/idnpXtu7iN.svg"
  }
]