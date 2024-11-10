import styles from "../styles/Stapel.module.css";
import back from '../assets/images/logo_640.png'
const Stapel = ({onZiehen}) => {
    return (
        <div className={styles.stapel}>
            <figure>
            <img src={back} alt="Rückseite der Karte auf Stapel" />
            <figcaption>Kartenstapel </figcaption>
            </figure>
            <br />
            <button onClick={onZiehen}>Ziehen</button>
        </div>
    );
};

export default Stapel;