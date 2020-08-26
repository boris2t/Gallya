import React from 'react'
import styles from './index.module.css'
import Layout from '../../components/common/layout'
import Card from '../../components/card'
import { PressUrls, PressImageUrls } from '../../constants/urlConstants'

const Interviews = () => {
    return ( 
        <Layout>
            <div className={styles.container}>
                <Card path={PressUrls.dancingAstronaut} image={PressImageUrls.dancingAstronaut} info='Dancing Astronaut'/>
                <Card path={PressUrls.pointBlank} image={PressImageUrls.pointBlank} info='Point Blank Music School'/>
                <Card path={PressUrls.mixmag} image={PressImageUrls.mixmag} info='Mixmag'/>
                <Card path={PressUrls.fazeMag} image={PressImageUrls.fazeMag} info='Faze Magazine'/>
                <Card path={PressUrls.dmc} image={PressImageUrls.dmc} info='DMC World Magazine'/>
                <Card path={PressUrls.elGroove} image={PressImageUrls.elGroove} info='Electronic Groove'/>
                <Card path={PressUrls.musicEss} image={PressImageUrls.musicEss} info='The Music Essentials'/>
                <Card path={PressUrls.nocturnal} image={PressImageUrls.nocturnal} info='The Nocturnal Times'/>
            </div>
        </Layout>
     )
}
 
export default Interviews