import Link from 'next/link'
import React from 'react'
import "./auth.css"

const Auth = ({children}) => {
  return (
    <div className='auth'>
        <div className='auth-main'>
            <div className='auth-nav'>
                <Link href={"/pages/auth/login"}>Login</Link>
                <Link href={"/pages/auth/signUp"}>Sign Up</Link>
            </div>
            <div className='auth-children'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Auth