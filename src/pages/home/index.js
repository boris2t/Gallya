import React, { Fragment } from 'react'
import styles from './index.module.css'
import Layout from '../../components/common/layout'
import Playlist from '../../components/playlist'
import SpotifyStats from '../../components/spotifyStats'
import Live from '../../components/live'
import Upcoming from '../../components/upcoming'

const Home = () => {
    return (
        <Layout>
            <Fragment>
                <div className={styles.container}>
                    <Playlist />
                    <Upcoming />
                </div>
                <Live videoId='K6NH6pr1-e8'/>
                <SpotifyStats />
            </Fragment>
        </Layout>
    )
}

export default Home