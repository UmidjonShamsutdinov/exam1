"use client"
import { singlePageApi } from '@/app/lib/api'
import React from 'react'

const page = async({params}) => {
    
    const data = await singlePageApi(params.id)
    
  return (
    <div>
        <img src={data.images[0]} alt="" width={500}/>
        <h1>{data.title}</h1>
    </div>
  )
}

export default page