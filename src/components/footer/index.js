import React from 'react'
import styles from './index.module.css'
import Social from '../common/social'

const Footer = () => {
    return (  
        <footer>
            <Social />
            <p className={styles.text}>&#169; 2020 GALLYA</p>
        </footer>
    )
}
 
export default Footer