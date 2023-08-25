import WhatsappImage from '../images/icon/whatsapp.svg';
import InstagramImage from '../images/icon/instagram.svg';
import ShopeeImage from '../images/icon/shopee.svg';
import TokopediaImage from '../images/icon/tokopedia.svg';

export const companyData: any = {
    name: 'DN Culture',
    description: 'Dn culture adalah unit usaha yang melayani titip beli berbagai barang dari luar negeri. Khusus-nya di dunia otomotif, namun tidak menutup kemungkinan untuk memberikan apa yang anda inginkan tanpa harus ribet anda cukup Duduk manis dan menunggu barang datang',
    logo: '/logo.png',
    contact: "https://wa.me/628125880555",
    address: 'Company Address',
    phone: 'Company Phone',
    email: 'Company Email',
    social: [
        {
            logo: WhatsappImage,
            name: 'Bukalapak',
            href: 'https://wa.me/628125880555',
            background: 'linear-gradient(180deg, #56B04C 0%, #196C13 100%)',
        },
        {
            logo: InstagramImage,
            name: 'Instagram',
            href: 'https://www.instagram.com/dnculture',
            background: 'linear-gradient(180deg, #B236A4 0%, #7D0870 100%)',
        },
        {
            logo: ShopeeImage,
            name: 'Shopee',
            href: 'https://shopee.co.id/dickyanugerah',
            background: 'linear-gradient(180deg, #F1582C 0%, #B72C05 100%)',
        },
        {
            logo: TokopediaImage,
            name: 'Tokopedia',
            href: 'https://tokopedia.link/dnculture',
            background: 'linear-gradient(180deg, #56B04C 0%, #196C13 100%)',
        }
    ]
}