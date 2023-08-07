import React, { useState } from 'react'
import ContentContainer from '@/components/general/ContentContainer'
import SectionContainer from '@/components/general/SectionContainer'
// import React from 'react'
import { styled } from '@stitches/react'
import { Post } from '@prisma/client'
import { decode, encode } from "js-base64"
import { GetStaticProps } from 'next'
import prisma from '../../../lib/prisma'
import Image from 'next/image'


const Input = styled('input', {
    padding: '1rem',
    margin: '1rem',
    border: 'none',
    borderRadius: '1rem',
    boxShadow: '0 0 1rem rgba(0,0,0,0.1)',
    '&:focus': {
        outline: 'none',
        boxShadow: '0 0 1rem rgba(0,0,0,0.2)',
    }
})

const Button = styled('button', {
    backgroundColor: 'green',
    padding: '1rem',
    margin: '1rem',
    border: 'none',
    borderRadius: '1rem',
    boxShadow: '0 0 1rem rgba(0,0,0,0.1)',
    '&:focus': {
        outline: 'none',
        boxShadow: '0 0 1rem rgba(0,0,0,0.2)',
    }
})



async function postData(url = '', data: Post) {
    // Default options are marked with *

    console.log(data);
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            title: data.title,
            content: data.content,
            image: data.image,
        }), // body data type must match "Content-Type" header
    })
    // .finally(() => {
    //     window.location.reload();
    // });
    return response.json(); // parses JSON response into native JavaScript objects
}


export async function getStaticProps() {
    const getPost = await prisma.post.findMany()
    return {
        props: {
            getPost
        }
    }
}


export default function Index({ getPost }: { getPost: Post[] }) {
    // console.log(getPost);
    const [Data, SetData] = useState({
        title: '',
        content: '',
        image: null,
    } as Post);
    // store data
    const handleChange = async (e: any) => {
        const { id, value } = e.target;
        if (id === 'image') {
            const file = e.target.files[0];
            // var file = element.files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
                console.log('RESULT', reader.result)
                SetData({
                    ...Data,
                    [id]: reader.result,
                });
            }
            reader.readAsDataURL(file);
        } else {
            SetData({
                ...Data,
                [id]: value,
            });
        }
    };

    return (
        <SectionContainer>
            <ContentContainer>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onSubmit={(e) => {
                        e.preventDefault()
                        postData('/api/posts', Data)
                    }}
                >
                    <Input defaultValue={"test"} onChange={handleChange} type="text" id='title' placeholder='title' />
                    <Input defaultValue={"test"} onChange={handleChange} type="text" id='content' placeholder='content' />
                    <Input onChange={handleChange} type="file" id='image' placeholder='image' />
                    <Button>
                        Submit
                    </Button>
                </form>
                <br />
                <br />
                {
                    getPost.map((post, index) => (
                        <Card key={index} title={post.title} content={post.content} id={post.id} image={post.image} published={post.published} />
                    ))
                }
            </ContentContainer>
        </SectionContainer>
    )
}



const Card = ({ title, image, content }: Post) => {
    let PostImages = image ? image : '/images/placeholder.png';
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                margin: '1rem',
            }}
        >
            <h1>{title}</h1>
            <p>{content}</p>
            <Image src={PostImages} alt="" width={400} height={400} />
        </div>
    )
}