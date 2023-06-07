// import { useParams } from 'react-router-dom'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Picture from '../../components/Picture'
import styles from './Slideshow.module.css'

function Slideshow({ pictures, title }) {

    // const { questionNumber } = useParams()
    // const questionNumberInt = parseInt(questionNumber)
    // const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    // const nextQuestionNumber = questionNumberInt + 1

    const [currentIndex, setCurrentIndex] = useState(0);
    const [transformValue, setTransformValue] = useState(0);
    const imageWidth = 100;
    const picturesLenght = pictures.length

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? picturesLenght - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setTransformValue((newIndex) * imageWidth);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === picturesLenght - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setTransformValue((newIndex) * imageWidth);
    };

    const style = {
        transform: `translateX(${initialTransformValue - currentTransformValue}%)`,
    };

    return (

        <div>
            <ul className={styles.containerSlide}>
                <li className={styles.slideItem}>
                    <div onClick={goToPrevious} className={styles.containerArrowLeft}>
                        <span className={styles.spanArrowLeft}>
                            <svg className={styles.arrowLeft} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                            </svg>
                        </span>
                    </div>
                    <div onClick={goToNext} className={styles.containerArrowRight}>
                        <span className={styles.spanArrowRight}>
                            <svg className={styles.arrowRight} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                            </svg>
                        </span>
                    </div>

                    <div className={styles.containerPictures}>
                        {pictures.map((picture, index) => (

                            <div className={styles.containerImage} >
                                <img initialTransformValue={index * imageWidth} currentTransformValue={transformValue} key={`${index}`} src={picture} alt={`${title} Picture ${index}`} className={styles.image} style={style} />
                                <p className={styles.containerNumberText}>{`${currentIndex + 1} / ${picturesLenght}`}</p>
                            </div>

                        ))}
                    </div>

                </li>
            </ul>
        </div>


    )
}

export default Slideshow