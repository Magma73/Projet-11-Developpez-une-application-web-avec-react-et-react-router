import styles from './Picture.module.css';

function Picture({ src, alt, initialTransformValue, currentTransformValue, index, picturesLength }) {
    const style = {
        transform: `translateX(${initialTransformValue - currentTransformValue}%)`,
    };

    return (
        <div className={styles.containerImage}>
            <img src={src} alt={alt} className={styles.image} style={style} />
            {picturesLength > 1 ? (
                <p className={styles.containerNumberText}>{`${index} / ${picturesLength}`}</p>
            ) : null}
        </div>
    );
}

export default Picture;