import React, { Fragment } from 'react'
import styles from './index.module.css'
import Layout from '../../components/common/layout'
import Playlist from '../../components/playlist'
import SpotifyStats from '../../components/spotifyStats'

const Home = () => {
    return (
        <Layout>
            <Fragment>
                <div className={styles.container}>
                    <Playlist />
                </div>
                <SpotifyStats />
            </Fragment>
        </Layout>
    )
}

export default Home