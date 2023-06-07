// import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card({ id, title, cover }) {
    return (
        <article className={styles.card}>
            <Link to={`/logement/${id}`} className={styles.cardLink}>
                <div className={styles.cardImage}>
                    <img src={cover} alt={title} className={styles.image} />
                </div>

                <header className={styles.cardTitle}>
                    <h2 className={styles.title}>{title}</h2>
                </header>
            </Link>
        </article>
    )
}

export default Card