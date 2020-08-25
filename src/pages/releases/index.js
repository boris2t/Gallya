import React from 'react'
import styles from './index.module.css'
import Layout from '../../components/common/layout'
import induction from '../../static/induction.jpg'
import Release from '../../components/release'

const Releases = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <Release path='https://www.beatport.com/release/induction/2931613' image={induction}/>
                <Release path='https://www.beatport.com/release/induction/2931613' image={induction}/>
                <Release path='https://www.beatport.com/release/induction/2931613' image={induction}/>
                <Release path='https://www.beatport.com/release/induction/2931613' image={induction}/>
                <Release path='https://www.beatport.com/release/induction/2931613' image={induction}/>
                <Release path='https://www.beatport.com/release/induction/2931613' image={induction}/>
                <Release path='https://www.beatport.com/release/induction/2931613' image={induction}/>
                <Release path='https://www.beatport.com/release/induction/2931613' image={induction}/>
                <Release path='https://www.beatport.com/release/induction/2931613' image={induction}/>
            </div>
        </Layout>
    )
}

export default Releases