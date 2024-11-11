"use client"
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>
        © PakWheels 2024 Made By{' '}
        <Link 
          href="https://www.linkedin.com/in/ibad-ur-rehman-developer/" 
          target="_blank" 
          className={styles.link}
        >
          @Ibad Ur Rehman
        </Link>
      </h1>
    </div>
  )
}

export default Footer