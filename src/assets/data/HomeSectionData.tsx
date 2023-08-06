import variables from '@/styles/globals.module.scss'
import FaqIcon from '@/assets/images/icon/faq-icon.svg'
import ProductIcon from '@/assets/images/icon/product-icon.svg'
import AboutIcon from '@/assets/images/icon/about-icon.svg'
import TestiIcon from '@/assets/images/icon/testimoni.svg'

const HomeSectionData = [
    {
        id: 1,
        name: 'Tentang Kita',
        path: '/#about',
        bg: variables.accentColor,
        image: AboutIcon
    },
    {
        id: 2,
        name: 'Produk Kita',
        path: '/#product',
        bg: '#FF3B99',
        image: ProductIcon
    },
    {
        id: 3,
        name: 'FAQ',
        path: '/#faq',
        bg: '#F80',
        image: FaqIcon,
    },
    {
        id: 4,
        name: 'Testimoni',
        path: '/#testimoni',
        bg: variables.greenColor,
        image: TestiIcon
    }
]

export default HomeSectionData;