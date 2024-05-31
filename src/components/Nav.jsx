import React from 'react'

export default function Nav() {
  return (
      <header>
        <nav className="navbar">
          <div className="logo">
          <a href="/"><img src="./logo.webp" alt="" /></a>
          </div>
           <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">About us</a></li>
           </ul>
            </nav>
      </header>
  )
}
