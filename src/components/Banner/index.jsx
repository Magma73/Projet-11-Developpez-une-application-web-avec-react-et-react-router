import styles from './Banner.module.css'
import stylesAbout from './BannerAbout.module.css'

function Banner({ image, alt, page }) {

    let selectedStyles = styles;

    if (page === 'home') {
        selectedStyles = styles;
        return (
            <div className={selectedStyles.container}>
                <div className={selectedStyles.containerImage}>
                    <img src={image} alt={alt} className={selectedStyles.image} />
                </div>
                <div className={selectedStyles.containerTitle}>
                    <h1 className={selectedStyles.title}>Chez vous,&nbsp;<span className={selectedStyles.span}>partout et ailleurs</span></h1>
                </div>
            </div>
        )
    }

    else if (page === 'about') {
        selectedStyles = stylesAbout;
        return (
            <div className={selectedStyles.container}>
                <div className={selectedStyles.containerImage}>
                    <img src={image} alt={alt} className={selectedStyles.image} />
                </div>
            </div>
        )
    }

}

export default Banner