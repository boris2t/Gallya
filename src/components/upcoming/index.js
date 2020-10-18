import React from 'react'
import styles from './index.module.css'

const Upcoming = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Upcoming events</h1>
            <div className={styles.event}>
                <div className={styles.date}>
                    <span className={styles.month}>October</span>
                    <h1 className={styles.day}>28</h1>
                </div>
                <h2>Techno Festival Berlin</h2>
            </div>
        </div>
    )
}

export default Upcoming