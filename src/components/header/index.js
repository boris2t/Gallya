import React from 'react'
import styles from './index.module.css'
import logo from '../../static/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to='/'><img src={logo} alt='logo' /></Link>
            <div className={styles.links}>
                <Link to='/about'>About</Link>
                <Link to='/releases'>Releases</Link>
                <Link to='/'>Work</Link>
            </div>
        </div>
    )
}

export default Header