import React from 'react'
import styles from './index.module.css'
import Layout from '../../components/common/layout'
import image from '../../static/contacts.jpg'
import FA from 'react-fontawesome'

const Contacts = () => {
    return (  
        <Layout>
            <div className={styles.container}>
                <img src={image} alt='press'></img>
                <div className={styles.info}>
                    <h2><FA name='map-marker' style={{ color: 'black' }} />        Sofia, Bulgaria</h2>
                    <h3><FA name='envelope' style={{ color: 'black' }} />          info@gallya.com</h3>
                </div>
            </div>
        </Layout>
    )
}
 
export default Contacts