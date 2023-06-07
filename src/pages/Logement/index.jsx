import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import Picture from '../../components/Picture'
import Slideshow from '../../components/Slideshow'
import styles from './Logement.module.css'

function Logement() {
    const { id } = useParams()
    console.log({ id })
    const [error, setError] = useState(false)
    const [logementsList, setLogementsList] = useState([])

    useEffect(() => {
        async function fetchLogements() {
            try {
                const response = await fetch(`http://localhost:3000/datas/logements.json`)
                const logementsList = await response.json()
                setLogementsList(logementsList)
            } catch (err) {
                console.log('===== error =====', err)
                setError(true)
            }
        }
        fetchLogements()
    }, [])

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    const logementData = logementsList.find(item => item.id === id);

    if (logementData) {
        const { title, pictures, host, description, rating, location, equipments, tags } = logementData;

        return (
            <div className={styles.containerLogements}>
                <div>
                    <Slideshow pictures={pictures} title={title} />
                </div>

                {/* <Picture /> */}
                <h1>{title}</h1>
                <p>{host.name}</p>
                <p>{equipments}</p>
                <p>{description}</p>
                <p>{rating}</p>
                <p>{location}</p>
                <p>{tags}</p>
                {/* ... autres éléments de rendu */}
            </div>
        );
    } else {
        return <span>Logement introuvable</span>;
    }


}


export default Logement