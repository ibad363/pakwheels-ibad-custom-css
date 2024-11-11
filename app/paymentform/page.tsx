import Link from "next/link"
import styles from '../styles/PaymentForm.module.css'

function PaymentForm() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Enter your Details</h1>
            <form className={styles.form}>
                <input 
                    className={styles.input} 
                    type="text" 
                    placeholder='Enter Your Name'
                />
                <input 
                    className={styles.input} 
                    type="email" 
                    placeholder='Enter Your Email'
                />
                <input 
                    className={styles.input} 
                    type="number" 
                    placeholder='Your Card Number'
                />
                <input 
                    className={styles.input} 
                    type="text" 
                    placeholder='Your Address'
                />
                <button className={styles.submitButton}>
                    <Link href="/paymentform/thanks">Place Order</Link>
                </button>
            </form>
        </div>
    )
}

export default PaymentForm