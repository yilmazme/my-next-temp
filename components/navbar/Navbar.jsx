import React from 'react'
import styles from "./Navbar.module.scss"
import Link from 'next/link'

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.links}>
      
        <Link href="/">
          <a>Home</a>
        </Link>
    
        <Link href="/about">
          <a>About Us</a>
        </Link>
    
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
   
        </div>
    </div>
  )
}

export default Navbar