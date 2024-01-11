"use client"
import { apiInstance } from '@/app/lib/api'
import React, { useState } from 'react'
import "./Hero.css"
import Link from 'next/link'

const Hero = () => {
    const [data, setData] = useState([])
    const handleClothes = async()=>{
        const data = await apiInstance(21, 0)
        console.log(data);
        setData(data)
    }

    const handleTech = async()=>{
        const data = await apiInstance(21, 21)
        console.log(data);
        setData(data)
    }
  return (
    <div className='hero'>
        <div className="hero__nav">
            <button onClick={handleClothes}>Clothes</button>
            <button onClick={handleTech}>Technologies</button>
        </div>
        <div className='cards'>
            {
                data ? data.map(e=>
                    <Link href={`/pages/${e.id}`} className="card" key={e.id}>
                        <img src={e?.images[0]} alt="" />
                        <h2>{e.title}</h2>
                        <p>{e.description}</p>
                    </Link>
                    ) : "Loading..."
            }
        </div>
    </div>
  )
}

export default Hero