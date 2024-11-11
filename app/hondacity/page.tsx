import Link from "next/link"
import styles from '../styles/CarDetails.module.css'

function HondaCity() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Honda City 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>

        <div className={styles.imageContainer}>
          <img 
            src="/assets/car3.jpg" 
            alt="Honda City" 
            className={styles.carImage}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.actionButton}>Book a Test Drive</button>
          <button className={styles.actionButton}>Request Bank Finance</button>
          <button className={styles.actionButton}>Visit Place</button>
          <button className={styles.actionButton}>Car Inspection</button>
        </div>

        <div className={styles.descriptionContainer}>
          <h3 className={styles.descriptionHeading}>Vehicle Description</h3>
          <p className={styles.description}>
            The Honda City 2024 is a subcompact sedan...
          </p>
          <p className={styles.description}>
            All five variants of the new Honda City...
          </p>

          <div className={styles.specificationsGrid}>
            <p><b>Body Type:</b> Compact sedan</p>
            <p><b>Engine:</b> 1199 to 1497 CC</p>
            <p><b>Torque:</b> 110 - 145 Nm</p>
            <p><b>Fuel Tank:</b> 40 L</p>
            <p><b>Suspension:</b> Soft</p>
            <p><b>Mileage:</b> 12 - 16 KM/L</p>
            <p><b>Transmission:</b> Manual & Auto</p>
            <p><b>Seating:</b> 5 - Persons</p>
            <p><b>Top Speed:</b> 180 KM/H</p>
          </div>
        </div>

        <h1 className={styles.price}>PKR 46.5 - 58.5 lacs</h1>

        <Link href="/paymentform">
          <button className={styles.paymentButton}>Make Payment</button>
        </Link>
      </div>
    )
}

export default HondaCity