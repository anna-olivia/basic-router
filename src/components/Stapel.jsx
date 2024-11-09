import styles from "../styles/Stapel.module.css";
import back from '../assets/images/logo_640.png'
const Stapel = () => {
    return (
        <div className={styles.stapel}>
            <figure>
            <img src={back} alt="Rückseite der Karte auf Stapel" />
            <figcaption>Ich bin der Stapel - klick mich um Karte zu ziehen</figcaption>
            </figure>
        </div>
    );
};

export default Stapel;