// import { useEffect, useState } from 'react'
import BannerAbout from '../../components/BannerAbout'
import Collapse from '../../components/Collapse'
import styles from './About.module.css'

function About() {
    return (
        <div>
            <div className={styles.containerBanner}>
                <BannerAbout
                    image='./assets/img/IMG_ABOUT.png'
                    alt='Vallée surplombée par des montagnes aux sommets enneigés'
                />
            </div>
            <div className={styles.containerCollapse}>
                <Collapse label="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
                <Collapse label="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse label="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <Collapse label="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </div>
    )
}

export default About