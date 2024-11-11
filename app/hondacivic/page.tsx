import Link from "next/link"
import styles from '../styles/CarDetails.module.css'

function HondaCivic() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>

        <div className={styles.imageContainer}>
          <img 
            src="/assets/car4.jpg" 
            alt="Honda Civic" 
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
            The Honda Civic 2024 is a popular car model in Pakistan, manufactured by the local automobile manufacturer and Honda subsidiary Atlas Honda...
          </p>
          <p className={styles.description}>
            The Honda Civic 2024 is available in two different variants: Standard/Oriel and RS...
          </p>

          <div className={styles.specificationsGrid}>
            <p><b>Body Type:</b> Sedan</p>
            <p><b>Engine:</b> 1498 CC</p>
            <p><b>Torque:</b> 180 - 220 Nm</p>
            <p><b>Fuel Tank:</b> 47 L</p>
            <p><b>Suspension:</b> Soft</p>
            <p><b>Mileage:</b> 11 - 14 KM/L</p>
            <p><b>Transmission:</b> Automatic</p>
            <p><b>Seating:</b> 5 - Persons</p>
            <p><b>Top Speed:</b> 220 KM/H</p>
          </div>
        </div>

        <h1 className={styles.price}>PKR 86.6 - 99.0 lacs</h1>

        <Link href="/paymentform">
          <button className={styles.paymentButton}>Make Payment</button>
        </Link>
      </div>
    )
}

export default HondaCivic