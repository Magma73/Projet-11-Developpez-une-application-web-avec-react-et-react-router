// import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import styles from './Home.module.css'

function Home() {
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

    return (
        <div>
            <div className={styles.containerBanner}>
                <Banner
                    image='./assets/img/IMG_BANNER.png'
                    alt='Falaises en bord de mer'
                />

            </div>
            <div className={styles.containerLogements}>
                {logementsList.map((logement, index) => (
                    <Card
                        key={`${logement.name}-${index}`}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home


