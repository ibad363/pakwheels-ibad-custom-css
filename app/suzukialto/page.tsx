import Link from "next/link"
import styles from '../styles/CarDetails.module.css'

function SuzukiAlto() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>

        <div className={styles.imageContainer}>
          <img 
            src="/assets/car2.png" 
            alt="Suzuki Alto" 
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
            Suzuki Alto 2024 has always enjoyed a healthy market share in developing countries, mainly due to its economic price and fuel economy. It was introduced in Pakistan in 1979 and instantly became popular. Initially known as Suzuki FX, it was the cheapest car in the market and came with three engine configurations: 539cc T5B, 543cc F5A, and 796cc F8B.
          </p>
          <p className={styles.description}>
            The Alto 2024 comes with a new R06A engine which is more efficient and powerful. The new Alto has a 3-cylinder 660cc engine capable of producing up to 39 and 56 of torque. Moreover, Alto 2024 has a multipoint injection fuel distribution system. The engine is paired either a 5-speed manual transmission or AGS (Auto Gear Shift).
          </p>

          <div className={styles.specificationsGrid}>
            <p><b>Body Type:</b> Hatchback</p>
            <p><b>Engine:</b> 658 CC</p>
            <p><b>Torque:</b> 56 Nm</p>
            <p><b>Suspension Type:</b> Soft Suspension</p>
            <p><b>Mileage:</b> 18 - 22 KM/L</p>
            <p><b>Transmission:</b> Manual & Automatic</p>
            <p><b>Seating Capacity:</b> 4 - Persons</p>
            <p><b>Top Speed:</b> 140 KM/H</p>
          </div>
        </div>

        <h1 className={styles.price}>PKR 23.3 - 30.5 lacs</h1>

        <Link href="/paymentform">
          <button className={styles.paymentButton}>Make Payment</button>
        </Link>
      </div>
    )
}

export default SuzukiAlto