import { useState } from 'react'
import styles from './Collapse.module.css'
import stylesLogement from './CollapseLogement.module.css'

function Collapse({ label, text, page }) {
    const [open, setOpen] = useState(false);

    let selectedStyles = styles;

    if (page === 'logement') {
        selectedStyles = stylesLogement; // Use the css module specific to the page "logement"
    }

    if (page === 'about') {
        selectedStyles = styles;
    }

    function toggle() {
        setOpen(!open);
    }

    return (
        <div className={selectedStyles.container} >
            <button className={selectedStyles.button} onClick={toggle}>{label}
                <span className={`${selectedStyles.span} ${open ? selectedStyles.rotate : ''}`} >
                    <svg className={selectedStyles.icon} width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7897 13.2103C11.4591 13.8797 12.5462 13.8797 13.2157 13.2103L23.4979 2.92804C24.1674 2.25862 24.1674 1.17148 23.4979 0.502064C22.8285 -0.167355 21.7414 -0.167355 21.072 0.502064L12 9.57403L2.92804 0.507419C2.25862 -0.162 1.17148 -0.162 0.502064 0.507419C-0.167355 1.17684 -0.167355 2.26397 0.502064 2.93339L10.7843 13.2157L10.7897 13.2103Z" fill="white" />
                    </svg>
                </span>

            </button>

            {open && (
                <div className={selectedStyles.toggle}>
                    {typeof text === 'string' ? (
                        <p className={selectedStyles.text}>{text}</p>
                    ) : (
                        <ul className={selectedStyles.list}>
                            {text.map((item, index) => (
                                <li key={index} className={selectedStyles.li}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    )

}

export default Collapse