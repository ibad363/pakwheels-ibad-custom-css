import styles from '../../styles/Thanks.module.css'

export default function Thanks () {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Thank you for Shopping!!!</h1>
            <p className={styles.message}>Your Order will be delivered in 3 Business Days</p>
        </div>
    )
}