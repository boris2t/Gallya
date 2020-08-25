import React from 'react'
import styles from './index.module.css'
import Layout from '../../components/common/layout'
import Release from '../../components/release'
import { ReleasesUrls, ReleaseImageUrls } from '../../constants/urlConstants'

const Releases = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <Release path={`${ReleasesUrls.induction}`} image={`${ReleaseImageUrls.induction}`}/>
                <Release path={`${ReleasesUrls.oddyssey}`} image={`${ReleaseImageUrls.oddyssey}`}/>
                <Release path={`${ReleasesUrls.serum}`} image={`${ReleaseImageUrls.serum}`}/>
                <Release path={`${ReleasesUrls.desires}`} image={`${ReleaseImageUrls.desires}`}/>
                <Release path={`${ReleasesUrls.drop}`} image={`${ReleaseImageUrls.drop}`}/>
                <Release path={`${ReleasesUrls.mau5ville}`} image={`${ReleaseImageUrls.mau5ville}`}/>
                <Release path={`${ReleasesUrls.stillOnEarth}`} image={`${ReleaseImageUrls.stillOnEarth}`}/>
                <Release path={`${ReleasesUrls.aroundMidnight}`} image={`${ReleaseImageUrls.aroundMidnight}`}/>
            </div>
        </Layout>
    )
}

export default Releases