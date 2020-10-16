import React from 'react'
import styles from './index.module.css'
import img from '../../static/about.jpg'
import Layout from '../../components/common/layout'

const About = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={img} alt='background' className={styles.image}/>
                    <div className={styles.contacts}>
                        <h1>Contacts</h1>
                        <p>Sofia, Bulgaria</p>
                        <p>info@gallya.com</p>
                    </div>
                </div>
                <div className={styles.right}>
                <p>Bulgarian DJ &amp; producer Gallya is one of the newest and most
                    interesting names in techno. Whether a rolling techno bassline
                    or a dynamic film score project, Gallya’s ability to consistently
                    churn out dark and immersive yet vibrant tracks has made her
                    a force to be reckoned with in the scene.</p>

                    <p>In 2015, she launched her own label ‘Set About’ in partnership
                    with Metodi Hristov. Though it’s only a few years old, Set
                    About is already touted as one of the most highly respected
                    labels in techno, releasing artists like GusGus, Hatzler, Teenage
                    Mutants, Maksim Dark, and DJ Lion. The label has given her a
                    platform not only to release her own music, but to share that
                    platform with techno artists that she’s passionate about from
                    all over the world.</p>

                    <p>Gallya’s breakthrough moment in 2016 was her nomination
                    of Beatport’s Top Tech House Artist. By releasing a slew
                    of highly successful EPs on labels like Set About, Off
                    Recordings, Kinetika, Deeperfect, and El Row Records, she
                    broke through noise and placed herself at the forefront of
                    mind-bending techno and dark, driving tech-house. Through
                    label showcases in South America and Europe, Gallya was
                    able to take her talents on the road to build a strong,
                    international fan-base.</p>

                    <p>The title track of her March 2017 EP Machines broke the
                    Beatport Techno Top 100, peaking at #16, and remained in
                    the charts for an entire month. “Machines” gained the support
                    of top techno DJs including Deadmau5 who played it in BBC
                    Radio One residency, which led to Gallya signing to his label
                    mau5trap for several 2018 and 2019 releases.</p>

                    <p>Along with the popularity of “Machines” in the DJ world, it was
                    also picked up for a scene in a major movie – this opportunity
                    fueled Gallya inspiration to work on some longer-term
                    production goals of scoring horror movies.</p>

                    <p>Through continued growth in 2019, Gallya hopes to push
                    her boundaries even further through both music and touring
                    worldwide. With releases on FORM Music and Octopus under
                    her belt and another mau5trap EP on the way, she continues
                    to be one of the hardest working, most prolific and promising
                    sounds in techno.</p>
                </div>
            </div>
        </Layout>
    )
}

export default About