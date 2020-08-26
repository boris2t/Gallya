import React from 'react'
import styles from './index.module.css'
import spotifyImg from '../../static/stats.jpeg'
import VisibleCountUp from '../visibleCountUp'

const SpotifyStats = () => {
    return (
        <div className={styles.spotifyInfo}>
            <div className={styles.spotifyIntro}>
                <h1 className={styles.artists}>Spotify for Artists</h1>
                <h1 className={styles.wrapped}>2019 WRAPPED</h1>
            </div>
            <img src={spotifyImg} alt='Artist' />
            <div className={styles.stats}>
                <div className={styles.titles}>
                    <h2>STREAMS</h2>
                    <h2>HOURS</h2>
                    <h2>LISTENERS</h2>
                    <h2>COUNTRIES</h2>
                </div>
                <div className={styles.numbers}>
                    <VisibleCountUp end={585.5} decimals={1} duration={2} suffix='k'/>
                    <VisibleCountUp end={49.4} decimals={1} duration={2} suffix='k'/>
                    <VisibleCountUp end={189.6} decimals={1} duration={2} suffix='k'/>
                    <VisibleCountUp end={78} decimals={0} duration={2} />
                </div>
            </div>
        </div>
    )
}

export default SpotifyStats