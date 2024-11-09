import styles from '../styles/Deck.module.css';
import pirate from '../assets/images/pirate_640.png';
import Buttons from './Buttons';

const Deck = () => {
return (
    
<>
<Buttons />

    
            <div className={styles.deck}>

            <figure>
                <img src={pirate} alt="Ich zeige die gezogenen Karten an" />
                {/* img erstmal nur Platzhalter soll dann dynamisch von Stapel random Karte anzeigen */}
            </figure>
        </div>
         {/* // hier sollen die gezogenen Karten aufgezeigt werden und dann entweder auf 1. Sammlung Spieler 1 oder 2
        // oder stoppen
        // oder abwehren 
        // oder 3 Karten verlieren auch von Schiff möglich  */}
        
        </>
    );
};

export default Deck;