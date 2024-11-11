import Link from "next/link"
import styles from '../styles/CarDetails.module.css'

function ToyotaCorolla() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>

        <div className={styles.imageContainer}>
          <img 
            src="/assets/car1.jpg" 
            alt="Toyota Corolla" 
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
            Toyota Corolla 2024 is a series of compact sedans...
          </p>
          <p className={styles.description}>
            Toyota Corolla's key features include...
          </p>

          <div className={styles.specificationsGrid}>
            <p><b>No. of Doors:</b> 4</p>
            <p><b>Engine:</b> 1800 CC</p>
            <p><b>Condition:</b> 8.5 / 10</p>
            <p><b>Driven:</b> 9,500 KM</p>
            <p><b>Suspension Type:</b> Soft Suspension</p>
            <p><b>Average:</b> 13 KM per LTR</p>
            <p><b>Transmission:</b> Automatic</p>
            <p><b>Fuel Type:</b> High Octane</p>
          </div>
        </div>

        <h1 className={styles.price}>PKR 59.7 - 75.5 lacs</h1>

        <Link href="/paymentform">
          <button className={styles.paymentButton}>Make Payment</button>
        </Link>
      </div>
    )
}

export default ToyotaCorolla