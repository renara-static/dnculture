import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { Post } from '@prisma/client'


const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log(req.body)
        const result = await prisma.post.create({
            data: {
                title: req.body.title,
                content: req.body.content,
                image: req.body.image,
            }
        })
        res.json(result)
    }
}