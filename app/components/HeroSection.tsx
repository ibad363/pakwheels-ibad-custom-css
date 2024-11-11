import styles from '../styles/HeroSection.module.css'

const HeroSection = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.mainHeading}>
          Sell Your Car on PakWheels and Get the Best Price
        </h1>

        <div className={styles.twoSection}>
          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Post your Ad on PakWheels</h2>
            <p>✔️ Post your Ad for Free in 3 Easy Steps</p>
            <p>✔️ Get Genuine offers from Verified Buyers</p>
            <p>✔️ Sell your car Fast at the Best Price</p>
            <button className={styles.postButton}>
              Post your Ad
            </button>
          </div>

          <div className={styles.divider}></div>

          <div className={`${styles.section} ${styles.rightSection}`}>
            <h2 className={styles.sectionHeading}>Try PakWheels Sell It For Me</h2>
            <p>✔️ Dedicated Sales Expert to Sell your Car</p>
            <p>✔️ We Bargain for you and share the Best Offer</p>
            <p>✔️ We ensure Safe & Secure Transaction</p>
            <button className={styles.registerButton}>
              Register Your Car
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection