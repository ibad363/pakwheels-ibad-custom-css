import Link from "next/link"
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/"><img src="/assets/logo.png" alt="Logo" className={styles.logo} /></Link>
      <h3 className={styles.navLink}>Used Cars</h3>
      <h3 className={styles.navLink}>New Cars</h3>
      <h3 className={styles.navLink}>Bikes</h3>
      <h3 className={styles.navLink}>Auto Store</h3>
      <h3 className={styles.navLink}>Videos</h3>
      <h3 className={styles.navLink}>Forums</h3>
      <h3 className={styles.navLink}>Blog</h3>
      <h3 className={styles.navLink}>More</h3>
      <button className={styles.postButton}>Post an Ad</button>
    </div>
  )
}

export default Header