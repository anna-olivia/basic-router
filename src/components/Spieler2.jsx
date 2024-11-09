import pirate2 from '../assets/images/pirate2.jpeg';
import styles from '../styles/Spieler2.module.css';
        
        const Spieler2 = () => {
            return (
                <div className={styles.spieler2}>
                    <figure>
                        <img src={pirate2} alt="Spieler2" />
                        <figcaption>Ich bin Spieler 2</figcaption>
                    </figure>
                </div>
            );
        };
        

export default Spieler2;