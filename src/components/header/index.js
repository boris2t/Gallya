import React from 'react'
import styles from './index.module.css'
import logo from '../../static/logo.png'
import { Link } from 'react-router-dom'
import FA from 'react-fontawesome'

const Header = () => {

    const toggleMenu = () => {
        const menu = document.getElementById('menu')
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block'
        } else {
            menu.style.display = 'none'
        }
    }

    return (
        <div className={styles.header}>
            <Link to='/'><img src={logo} alt='logo' /></Link>
            <div className={styles.links}>
                <Link to='/about'>About</Link>
                <Link to='/releases'>Releases</Link>
                <Link to='/press'>Press</Link>
                <Link to='/contacts'>Contacts</Link>
            </div>
            <div className={styles.dropdown}>
                <nav role="navigation">
                    <div className={styles.menuToggle}>
                        <FA name='bars' style={{ color: 'white' }} size='2x' onClick={() => toggleMenu()}></FA>
                        <ul id="menu" className={styles.menu}>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/releases'>Releases</Link></li>
                            <li><Link to='/press'>Press</Link></li>
                            <li><Link to='/contacts'>Contacts</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header