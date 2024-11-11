import Link from "next/link"
import styles from '../styles/FeatureCar.module.css'

function FeatureCar() {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1 className={styles.heading}>Featured New Cars</h1>
                <p className={styles.viewAll}>View All New Cars</p>
            </div>
            
            <div className={styles.categoryContainer}>
                <h4 className={styles.activeCategory}>Popular</h4>
                <h4 className={styles.category}>Upcoming</h4>
                <h4 className={styles.category}>Newly Launched</h4>
            </div>
            
            <div className={styles.carsGrid}>
                {/* 1st Car */}
                <div className={styles.carCard}>
                    <Link href="/toyotacorolla" className={styles.imageContainer}>
                        <img 
                            src="/assets/car1.jpg" 
                            alt="Toyota Corolla" 
                            className={styles.carImage}
                        />
                    </Link>
                    <div className={styles.carInfo}>
                        <Link href="/toyotacorolla">
                            <h3 className={styles.carName}>Toyota Corolla</h3>
                        </Link>
                        <p className={styles.price}>PKR 59.7 - 75.5 lacs</p>
                        <p className={styles.reviews}>
                            <span className={styles.stars}>★★★☆☆</span> 621 Reviews
                        </p>
                    </div>
                </div>

                {/* 2nd Car */}
                <div className={styles.carCard}>
                    <Link href="/suzukialto" className={styles.imageContainer}>
                        <img 
                            src="/assets/car2.png" 
                            alt="Suzuki Alto" 
                            className={styles.carImage}
                        />
                    </Link>
                    <div className={styles.carInfo}>
                        <Link href="/suzukialto">
                            <h3 className={styles.carName}>Suzuki Alto</h3>
                        </Link>
                        <p className={styles.price}>PKR 23.3 - 30.5 lacs</p>
                        <p className={styles.reviews}>
                            <span className={styles.stars}>★★★☆☆</span> 199 Reviews
                        </p>
                    </div>
                </div>

                {/* 3rd Car */}
                <div className={styles.carCard}>
                    <Link href="/hondacity" className={styles.imageContainer}>
                        <img 
                            src="/assets/car3.jpg" 
                            alt="Honda City" 
                            className={styles.carImage}
                        />
                    </Link>
                    <div className={styles.carInfo}>
                        <Link href="/hondacity">
                            <h3 className={styles.carName}>Honda City</h3>
                        </Link>
                        <p className={styles.price}>PKR 46.5 - 58.5 lacs</p>
                        <p className={styles.reviews}>
                            <span className={styles.stars}>★★★☆☆</span> 456 Reviews
                        </p>
                    </div>
                </div>

                {/* 4th Car */}
                <div className={styles.carCard}>
                    <Link href="/hondacivic" className={styles.imageContainer}>
                        <img 
                            src="/assets/car4.jpg" 
                            alt="Honda Civic" 
                            className={styles.carImage}
                        />
                    </Link>
                    <div className={styles.carInfo}>
                        <Link href="/hondacivic">
                            <h3 className={styles.carName}>Honda Civic</h3>
                        </Link>
                        <p className={styles.price}>PKR 86.6 - 99.0 lacs</p>
                        <p className={styles.reviews}>
                            <span className={styles.stars}>★★★☆☆</span> 359 Reviews
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureCar