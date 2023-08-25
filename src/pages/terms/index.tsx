import ContentContainer from '@/components/general/ContentContainer'
import SectionContainer from '@/components/general/SectionContainer'
import SectionTitle from '@/components/general/SectionTitle'
import React from 'react'
import styles from '@/styles/terms/terms.module.scss'
import { styled } from '@stitches/react'
import { companyData } from '@/assets/data/companyData'
import { TextHighlight as V } from '@/components/general/TextHighlight'
import Head from 'next/head'


export default function TermsPage() {
    const CompanyName = <V>{companyData?.name}</V>
    return (
        <>
            <Head>
                <title>Syarat & Ketentuan Pemesanan | DN Culture</title>
                <meta name="description" content={`Syarat & Ketentuan Pemesanan DN Culture`} />
                <meta property="og:title" content={`Syarat & Ketentuan Pemesanan DN Culture`} />
                {/* <meta property='keywords' content={``} /> */}
            </Head>
            <SectionContainer
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
                                Syarat & Ketentuan merupakan perjanjian yang mengatur hak, kewajiban, dan tanggung jawab Pembeli dalam menggunakan layanan <V>DN Culture</V>.
                                <br />
                                <V>Penjual</V> adalah pihak yang menjual Barang di luar negeri melalui platform online.
                                <br />
                                <V>Pembeli</V> adalah mereka yang menggunakan jasa pembelian Barang dari <V>DN Culture</V>.
                                <br />
                                <V>Barang</V> sendiri mengacu pada benda berwujud yang dapat dikirim oleh perusahaan jasa pengiriman Barang.
                            </div>
                        </div>
                    </div>
                </ContentContainer>
            </SectionContainer>
            <SectionContainer
                // marginBottom={true}
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
                                <li>
                                    Pembeli harus menyetujui syarat & ketentuan yang telah ditetapkan oleh {CompanyName}.
                                </li>
                                <li>
                                    Hanya Barang yang berasal dari negara berikut yang dapat dikirmkan:
                                    <ul>
                                        <li>
                                            USA
                                        </li>
                                        <li>
                                            Jepang
                                        </li>
                                        <li>
                                            Korea
                                        </li>
                                        <li>
                                            Australia
                                        </li>
                                        <li>
                                            Singapura
                                        </li>
                                        <li>
                                            Malaysia
                                        </li>
                                    </ul>

                                </li>
                                <li>
                                    {CompanyName} berhak menolak pesanan barang yang tidak dapat dikirim ke Indonesia karena termasuk dalam kategori barang berbahaya, melanggar Undang-Undang yang berlaku di Indonesia, atau berasal dari penjual dengan reputasi buruk (Untrusted Seller).
                                </li>
                                <li>
                                    Pembeli tidak dapat membatalkan pesanan kecuali ada keadaan seperti stok barang kosong atau kejadian lain yang disetujui oleh penjual.
                                </li>
                            </ol>
                        </div>
                    </div>
                </ContentContainer>
            </SectionContainer>
            <SectionContainer
                // marginBottom={true}
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
                                    Pembeli melakukan pelunasan sisa pembayaran saat barang tiba di Indonesia.
                                </li>
                                <li>Pembayaran menggunakan bank transfer Bank <V>BCA</V> <V>0960845757</V>{" "}
                                    a/n <V>Dicky Anugerah D.P</V>
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
