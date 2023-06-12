import styles from './Tag.module.css'

function Tag({ tags }) {

    return (
        <div className={styles.containerTags}>
            {
                tags.map((tag, index) => (
                    < div className={styles.tag} key={index}>
                        <p className={styles.text}>{tag}</p>
                    </div >
                ))
            }
        </div>
    )

}

export default Tag