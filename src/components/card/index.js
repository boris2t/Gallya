import React, { Fragment } from 'react'
import styles from './index.module.css'

const Card = ({ path, image, info }) => {
    return (
        <Fragment>
            <div className={styles.release}>
                <a target="_blank" rel="noopener noreferrer" href={path}>
                    <img src={image} alt='card' />
                    <p className={styles.info}>{info}</p>
                </a>
            </div>
            
        </Fragment>
    )
}

export default Card