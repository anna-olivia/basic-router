import styles from '../styles/Deck.module.css';
import schatz from '../assets/images/schatz.svg';

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
                    <img src={schatz} alt="Schatz" />
                    <figcaption>Ziehe eine Karte vom obigen Stapel</figcaption>
                </figure>
            )
            }
        </div>
         
        
        </>
    );
};

export default Deck;