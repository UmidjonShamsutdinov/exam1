import Link from 'next/link'
import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="links">
                <Link href={""}>Home</Link>
                <Link href={"/pages/auth"}>Auth</Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav