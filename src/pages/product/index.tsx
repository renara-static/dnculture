import React from 'react'
import prisma from './../../../lib/prisma';
import { GetStaticProps, NextPage } from 'next';
import { PrismaClient, Post } from '@prisma/client';
import ProductCard from '@/components/product/ProductCard';
import { productData } from '@/assets/data/productData';
type PostType = {
    post: Post[];
};

type Item = {
    post: Post;
};


// export const getStaticProps: GetStaticProps = async () => {
//     const post = await prisma.post.findMany({
//         // where: { published: true },
//         // include: {
//         //     author: {
//         //         select: { name: true },
//         //     },
//         // },
//         select: {
//             // email: true,
//             title: true,
//             content: true,
//             // createdAt: true,
//         },
//     });
//     // feed.map((item) => {
//     //     item.createdAt  = item.createdAt.toString();
//     // });
//     return {
//         props: { post },
//         revalidate: 10,
//     };
// };




export default function index({ post }: PostType) {
    // const [form, setForm] = React.useState<Post>();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            <h1>Product</h1>
            {productData?.map((item, i) => {
                return <ProductCard key={i} data={item} />
            })}
        </div>
    )
}


const Card = (props: any) => {
    return (
        <div
            style={{
                width: "90%",
                height: "100px",
                backgroundColor: "red",
                margin: "10px",
            }}>
            <h1>{props.title}</h1>
        </div>
    )
}


