import React from 'react'
import { contactData } from '@/assets/data/contactData'

export default function index() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            <h1>Contact</h1>
            <div style={{
                display: 'flex',
                gap: '1rem',
            }}>
                {
                    contactData?.map((item, i) => {
                        return <div key={i}>
                            <h3>{item.title}</h3>
                            {/* <p>{item.content}</p> */}
                        </div>
                    }
                    )
                }
            </div>
        </div>
    )
}
