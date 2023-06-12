import { useParams } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Loader from '../../components/Loader'
import UseFetch from '../../utils/Hook'
import styles from './Logement.module.css'

function Logement() {
    const { id } = useParams();
    const { logementsList, isLoading, error } = UseFetch("/datas/logements.json");

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    if (isLoading) {
        return (
            <div className={styles.containerLoader}>
                <Loader />
            </div>
        );

    } else {
        const logementData = logementsList.find(item => item.id === id);


        if (logementData === undefined) {
            return <Navigate to="/error" />;
        }

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
                            <Collapse page="logement" label="Description" text={description} />
                        </div>
                        <div className={styles.containerEquipments}>
                            <Collapse page="logement" label="Équipements" text={equipments} />
                        </div>

                    </div>


                </div >
            </div >
        );
    }
}

export default Logement;