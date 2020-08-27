import React from 'react'
import styles from './index.module.css'

const Playlist = () => {

    return (
        <div className={styles.player}>
            <iframe
                title="Spotify"
                src="https://embed.spotify.com/?uri=spotify:album:7gNavsehRiz2rpxLq5GnsL?si=mAPMpp_xQdyikCIq8vZ-3Q&amp;view=list&amp;theme=white"
                frameBorder="0"
                allowtransparency="true"
                allow="geolocation *">
            </iframe>
        </div>
    )
}

export default Playlist