import variables from '@/styles/globals.module.scss'
import FaqIcon from '@/assets/images/icon/faq-icon.svg'
import ProductIcon from '@/assets/images/icon/product-icon.svg'
import AboutIcon from '@/assets/images/icon/about-icon.svg'
import TestiIcon from '@/assets/images/icon/testimoni.svg'

const NavData = [
    {
        id: 1,
        name: 'Beranda',
        path: '/',
        bg: variables.accentColor,
        image: AboutIcon
    },
    {
        id: 2,
        name: 'Proses Pemesanan',
        path: '/process',
        bg: '#FF3B99',
        image: ProductIcon
    },
    {
        id: 3,
        name: 'Syarat & Ketentuan',
        path: '/terms',
        bg: '#F80',
        image: FaqIcon,
    },
    // {
    //     id: 4,
    //     name: 'Kontak Kami',
    //     path: '/contact',
    //     bg: variables.greenColor,
    //     image: TestiIcon
    // }
]

export default NavData;