import ContentContainer from '@/components/general/ContentContainer'
import SectionContainer from '@/components/general/SectionContainer'
import SectionTitle from '@/components/general/SectionTitle'
import React from 'react'
import styles from '@/styles/terms/terms.module.scss'
import { styled } from '@stitches/react'
import { companyData } from '@/assets/data/companyData'
import { TextHighlight as V } from '@/components/general/TextHighlight'


export default function TermsPage() {
    const CompanyName = <V>{companyData?.name}</V>
    return (
        <>
            <SectionContainer
                marginTop={true}
                marginBottom={true}
                paddingBlock={true}
            >
                <ContentContainer>
                    <div
                        className={styles.termsContainer}
                    >

                        <SectionTitle>
                            Syarat & Ketentuan Pemesanan {CompanyName}
                        </SectionTitle>
                        <div
                            className={styles.termsList}
                        >
                            <div
                                className={styles.termsDesc}
                            >
                                <V>Syarat & Ketentuan</V> adalah perjanjian antara Pembeli dan {CompanyName} yang berisikan peraturan yang mengatur hak, kewajiban, tanggung jawab Pembeli dan Belanja Dunia, sekaligus cara transaksi pada layanan kami.
                                <br />
                                {/* <br /> */}
                                <V>Penjual</V> adalah pihak yang menjual Barang di luar negeri melalui media internet baik dalam bentuk web portal maupun aplikasi mobile.
                                <br />
                                {/* <br /> */}
                                <V>Pembeli</V> adalah pihak yang menggunakan jasa pembelian Barang melalui layanan yang disediakan oleh Belanja Dunia.
                                <br />
                                {/* <br /> */}
                                <V>Barang</V> adalah benda berwujud dan memiliki fisik Barang yang dapat dikirim dan memenuhi kriteria pengiriman oleh perusahaan jasa pengiriman Barang.
                            </div>
                        </div>
                    </div>
                </ContentContainer>
            </SectionContainer>
            <SectionContainer
                marginBottom={true}
                paddingBlock={true}
            >
                <ContentContainer>
                    <div
                        className={styles.termsContainer}
                    >
                        <SectionTitle>
                            Pemesanan :
                        </SectionTitle>
                        <div
                            className={styles.termsList}
                        >
                            <ol
                                className={styles.OrderedList}
                            >
                                <li>Pembeli menyetujui syarat & ketentuan yang ditetapkan oleh {CompanyName}
                                </li>
                                <li>Barang yang dapat dikirim hanya yang berasal dari penjual online dari USA, Jepang, Korea, Australia, Singapura dan Malaysia.
                                </li>
                                <li>
                                    Kami berhak menolak pesanan barang yang tidak dapat dikirim ke Indonesia karena termasuk kategori barang berbahaya atau menyalahi Undang-Undang yang berlaku di Indonesia atau pesanan yang berasal dari penjual dengan reputasi buruk (Untrusted Seller).
                                </li>
                                <li>
                                    Pembeli tidak dapat melakukan pembatalan pesanan kecuali dilakukan oleh pihak penjual seperti misalnya terjadi stok barang kosong atau hal lain.
                                </li>
                            </ol>
                        </div>
                    </div>
                </ContentContainer>
            </SectionContainer>
            <SectionContainer
                marginBottom={true}
                paddingBlock={true}
            >
                <ContentContainer>
                    <div
                        className={styles.termsContainer}
                    >
                        <SectionTitle>
                            Pembayaran :
                        </SectionTitle>
                        <div
                            className={styles.termsList}
                        >
                            <ol
                                className={styles.OrderedList}
                            >
                                <li>Setelah pemesanan dilakukan, Pembeli harus melakukan pembayaran penuh maupun Uang Muka sejumlah harga yang disepakati.
                                </li>
                                <li>
                                    Pembeli melakukan pelunasan sisa pembayaran (uang muka) saat barang tiba di Indonesia.
                                </li>

                                <li>Pembayaran menggunakan bank transfer Bank BCA KCP Serpong an.Tomi Satriyo, rek no: 497 0451 353. atau Bank Mandiri an. Tomi Satriyo, rek no: 128 000 613 6433.
                                </li>
                                <li>
                                    Pembeli memahami dan menyetujui bahwa stok Barang dapat berubah sewaktu-waktu, saat stok kosong , kami akan membatalkan pesanan dan pembayaran dikembalikan penuh.
                                </li>
                                <li>
                                    Pembayaran tidak dapat dibatalkan/dikembalikan kecuali saat terjadi pembatalan dari pihak penjual atau kerusakan barang total atau barang hilang saat pengiriman ke Indonesia.
                                </li>
                                <li>
                                    Apabila terjadi pengembalian pembayaran akan dilakukan dalam waktu maksimal 14 hari kerja.
                                </li>
                            </ol>
                        </div>
                    </div>
                </ContentContainer>
            </SectionContainer>
            <SectionContainer
                marginBottom={true}
                paddingBlock={true}
            >
                <ContentContainer>
                    <div
                        className={styles.termsContainer}
                    >
                        <SectionTitle>
                            Pengiriman :
                        </SectionTitle>
                        <div
                            className={styles.termsList}
                        >
                            <ol
                                className={styles.OrderedList}
                            >
                                <li>Penjual/Vendor di negara asal akan mengirimkan barang pesanan terlebih dahulu ke gudang penyimpanan kami di negara asal juga.
                                </li>
                                <li>
                                    Pesanan akan dikirimkan ke Indonesia setelah kami terima di Gudang Penyimpanan di Negara asal barang dan telah melalui proses kemas ulang/repacking.
                                </li>
                                <li>
                                    Estimasi waktu pengiriman barang dari negara asal ke Indonesia sekitar 14 sampai 40 hari.
                                </li>
                                <li>
                                    Estimasi pengiriman tersebut dapat berubah dan mengalami keterlambatan karena adanya beberapa kondisi di luar kendali seperti sebagai berikut:
                                    <ul
                                        className={styles.UnOrderedList}>
                                        <li>
                                            Penjual terlambat mengirimkan barang ke gudang penyimpanan di negara asal barang.
                                        </li>
                                        <li>
                                            High season sehubungan adanya Hari Raya baik di dalam maupun luar negeri.
                                            Terjadi penundaan di Bea Cukai/Custom.
                                        </li>
                                        Cuaca buruk yang mengganggu penerbangan & pelayaran.
                                        <li>
                                            Terjadi huru-hara, perang maupun bencana alam dan faktor lainya.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </ContentContainer>
            </SectionContainer>
        </>
    )
}
