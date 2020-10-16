import React from 'react'
import styles from './index.module.css'

const Playlist = () => {

    return (
        <div className={styles.player}>
            <iframe
                title="Spotify"
                src="https://embed.spotify.com/?uri=spotify:playlist:59sX23J9aMEg41pSGozR4D?si=yYkpU_gqTMe91kdYqULgwg&amp;view=list&amp;theme=white"
                frameBorder="0"
                allowtransparency="true"
                allow="geolocation *">
            </iframe>
        </div>
    )
}

export default Playlist