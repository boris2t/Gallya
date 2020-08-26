import React from 'react'
import styles from './index.module.css'
import Layout from '../../components/common/layout'
import Card from '../../components/card'
import { ReleasesUrls, ReleaseImageUrls } from '../../constants/urlConstants'

const Releases = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <Card path={`${ReleasesUrls.induction}`} image={`${ReleaseImageUrls.induction}`}/>
                <Card path={`${ReleasesUrls.oddyssey}`} image={`${ReleaseImageUrls.oddyssey}`}/>
                <Card path={`${ReleasesUrls.serum}`} image={`${ReleaseImageUrls.serum}`}/>
                <Card path={`${ReleasesUrls.desires}`} image={`${ReleaseImageUrls.desires}`}/>
                <Card path={`${ReleasesUrls.drop}`} image={`${ReleaseImageUrls.drop}`}/>
                <Card path={`${ReleasesUrls.mau5ville}`} image={`${ReleaseImageUrls.mau5ville}`}/>
                <Card path={`${ReleasesUrls.stillOnEarth}`} image={`${ReleaseImageUrls.stillOnEarth}`}/>
                <Card path={`${ReleasesUrls.aroundMidnight}`} image={`${ReleaseImageUrls.aroundMidnight}`}/>
            </div>
        </Layout>
    )
}

export default Releases