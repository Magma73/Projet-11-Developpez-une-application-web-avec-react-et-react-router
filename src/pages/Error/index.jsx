import { Link } from 'react-router-dom'
import styles from './Error.module.css'

function Error() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}>Oups! La page que&nbsp;<span className={styles.span}>vous demandez n'existe pas.</span></p>
            <Link to="/" className={styles.link}>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error