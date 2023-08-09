import BukalapakImage from '../images/icon/bukalapak.svg'
import InstagramImage from '../images/icon/instagram.svg';
import ShopeeImage from '../images/icon/shopee.svg';
import TokopediaImage from '../images/icon/tokopedia.svg';

export const companyData = {
    name: 'DN Culture',
    description: 'Dn culture adalah unit usaha yang melayani titip beli berbagai barang dari luar negeri. Khusus-nya di dunia otomotif, namun tidak menutup kemungkinan untuk memberikan apa yang anda inginkan tanpa harus ribet anda cukup Duduk manis dan menunggu barang datang',
    logo: '/logo.png',
    contact: "https://api.whatsapp.com",
    address: 'Company Address',
    phone: 'Company Phone',
    email: 'Company Email',
    social: [
        {
            logo: BukalapakImage,
            name: 'Bukalapak',
            href: 'https://www.bukalapak.com/u/dnculture',
            // color: '#FF5722',
            background: 'linear-gradient(180deg, #E21C53 0%, #97002A 100%)',
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
            href: 'https://shopee.co.id/dnculture',
            background: 'linear-gradient(180deg, #F1582C 0%, #B72C05 100%)',
        },
        {
            logo: TokopediaImage,
            name: 'Tokopedia',
            href: 'https://www.tokopedia.com/dnculture',
            background: 'linear-gradient(180deg, #56B04C 0%, #196C13 100%)',
        }
    ]
}