import styles from './BannerHome.module.css'

function BannerHome({ image, alt }) {
    return (
        <div className={styles.container}>
            <div className={styles.containerImage}>
                <img src={image} alt={alt} className={styles.image} />
            </div>
            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Chez vous,&nbsp;<span className={styles.span}>partout et ailleurs</span></h1>
            </div>
        </div>
    )
}

export default BannerHome