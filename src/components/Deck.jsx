import styles from '../styles/Deck.module.css';
import pirate from '../assets/images/pirate_640.png';
// import gold from '../assets/images/gold.jpeg';
// import kanone from '../assets/images/kanone.jpeg';

import Buttons from './Buttons';

const Deck = ({karte}) => {
    
    return (
    
<>
<Buttons />

    
            <div className={styles.deck}>
{karte ?
          (  <figure>
                <img src={karte.image} alt="Ich zeige die gezogenen Karten an" />
                {/* img erstmal nur Platzhalter soll dann dynamisch von Stapel random Karte anzeigen */}
                <figcaption>Gezogene Karte{karte.type}</figcaption>
            </figure>): (
                <figure>
                    <img src={pirate} alt="Pirat" />
                    <figcaption>Ziehe eine Karte vom obigen Stapel</figcaption>
                </figure>
            )
            }
        </div>
         
        
        </>
    );
};

export default Deck;