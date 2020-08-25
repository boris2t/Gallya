import React from 'react'
import styles from './index.module.css'
import Layout from '../../components/common/layout'
import Playlist from '../../components/playlist'

const Home = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <Playlist />
            </div>
        </Layout>
    )
}
 
export default Home