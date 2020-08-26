import React from 'react'
import styles from './index.module.css'
import YouTube from 'react-youtube'

const Live = ({ videoId }) => {
    const opts = {
        height: '100%',
        width: '80%',
    }

    return (
        <div className={styles.container}>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    )
}

export default Live