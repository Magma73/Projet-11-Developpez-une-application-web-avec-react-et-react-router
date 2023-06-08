import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import Picture from '../../components/Picture'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
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
        const nameParts = host.name.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts[1];

        return (
            <div className={styles.containerMain}>
                <div className={styles.containerSlide}>
                    <Slideshow pictures={pictures} title={title} />
                </div>

                <div className={styles.containerInfos}>

                    <div className={styles.containerTitleTagsProfilRating}>

                        <div className={styles.containerTitleTags}>
                            <div className={styles.containerTitle}>
                                <h1 className={styles.title}>{title}</h1>
                                <h2 className={styles.location}>{location}</h2>
                            </div>
                            <div className={styles.containerTags}>
                                <Tag tags={tags} />
                            </div>
                        </div>

                        <div className={styles.containerRatingProfil}>
                            <div className={styles.containerRating}>
                                <Rating rating={rating} />
                            </div>
                            <div className={styles.containerProfil}>
                                <h3 className={styles.name} ><span>{firstName} </span><span>{lastName}</span></h3>
                                <img className={styles.photo} src={host.picture} alt={host.name} />
                            </div>
                        </div>

                    </div>


                    <div className={styles.containerDescriptionEquipments}>

                        <div className={styles.containerDescription}>
                            <Collapse label="Description" text={description} />
                        </div>
                        <div className={styles.containerEquipments}>
                            <Collapse label="Équipements" text={equipments} />
                        </div>

                    </div>


                </div >
            </div >
        );
    } else {
        return <span>Logement introuvable</span>;
    }


}


export default Logement