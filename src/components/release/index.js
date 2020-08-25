import React from 'react'
import styles from './index.module.css'

const Release = ({ path, image}) => {
    return (
        <div className={styles.release}>
            <a target="_blank" rel="noopener noreferrer" href={path}><img src={image} alt='release' /></a>
        </div>
    )
}

export default Release