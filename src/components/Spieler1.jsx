// handkarten
import pirate1 from '../assets/images/pirate1.jpeg';
import styles from '../styles/Spieler1.module.css'

const Spieler1 = () => {
    return (
        <div className={styles.spieler1}>
            <figure>
                <img src={pirate1} alt="Spieler1" />
                <figcaption>Ich bin Spieler 1</figcaption>
            </figure>
        </div>
    );
};

export default Spieler1;