import { Link } from 'react-router-dom'
import logo from '../../assets/logo-kasa-header.svg'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.containerLogo}>
                <Link to="/">
                    <img src={logo} alt='logo-kasa' className={styles.logo} />
                </Link>
            </div>

            <nav className={styles.nav}>
                <Link to="/" className={styles.home}>Accueil</Link>
                <Link to="/apropos" className={styles.about}>À propos</Link>
            </nav>
        </header>
    )
}

export default Header