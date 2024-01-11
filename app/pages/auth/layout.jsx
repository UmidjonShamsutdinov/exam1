"use client"
import React from 'react'
import Auth from './page'
import { usePathname } from 'next/navigation'

const AuthLayout = ({children}) => {
    const params = usePathname()
  return (
    <Auth>
        {params !== "/pages/auth" && children}  
    </Auth>
  )
}

export default AuthLayout