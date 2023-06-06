import styles from './BannerAbout.module.css'

function BannerAbout({ image, alt }) {
    return (
        <div className={styles.container}>
            <div className={styles.containerImage}>
                <img src={image} alt={alt} className={styles.image} />
            </div>
        </div>
    )
}

export default BannerAbout