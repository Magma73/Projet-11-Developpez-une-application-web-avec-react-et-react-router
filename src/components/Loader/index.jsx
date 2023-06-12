import styles from './Loader.module.css'

function Loader() {

    return (
        <div className={styles.containerLoader}>
            <div className={styles.loaderItem}></div>
        </div>
    )
}
export default Loader