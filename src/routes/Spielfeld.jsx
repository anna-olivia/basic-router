import { useState } from "react";
import styles from "../styles/Spielfeld.module.css";
import Schiff1 from "../components/Schiff1";
import Schiff2 from "../components/Schiff2";
import Stapel from "../components/Stapel";
import Spieler1 from "../components/Spieler1";
import Spieler2 from "../components/Spieler2";
import Sammlung1 from "../components/Sammlung1";
import Sammlung2 from "../components/Sammlung2";
import Deck from "../components/Deck";
import pirate from '../assets/images/pirate_640.png';
import gold from '../assets/images/gold.svg';
import kanone from '../assets/images/kanone.svg';
import schiffsteil from '../assets/images/schiffsteil.svg';
import colors from '../styles/Schiffsteile.module.css'

const set = [
  { type: 'gold', image: gold },
  { type: 'kanone', image: kanone },
  { type: 'pirate', image: pirate },
  { type: 'schiffsteil', image: schiffsteil },

];

const Spiel = () => {
  const [currentGold, setCurrentGold] = useState(0);
  const [currentKanone, setCurrentKanone] = useState(0);
  const [randomKarte, setRandomKarte] = useState(null);
  const [transparent, setTransparent] = useState("");

  const addClickHandler = () => {
    const getRandomKarte = set[Math.floor(Math.random() * set.length)];
    setRandomKarte(getRandomKarte);
    addChangeHandler(getRandomKarte);
//     beim Klicken hier auch addChangeHandler aufrufen
// überarbeiten: der abzug der münzen etc. sollte vorm weiteren klicken schon angezeigt werden
  }

  const addChangeHandler = (karte) => {
    switch(karte.type) {
      case 'gold':
        setCurrentGold(prevGold => prevGold + 1);
        break;
      case 'kanone':
        setCurrentKanone(prevKanone => prevKanone + 1);
        break;
        case 'schiffsteil':
          setTransparent(".transparent");
          break;
      case 'pirate':
        if(currentKanone > 0) {
          setCurrentKanone(prevKanone => prevKanone - 1);
        } else {
          // setRandomKarte(set[2]);
          alert("Spieler 2 an der Reihe");
        }
        break;
      default:
        alert("Unbekannte Karte");
    }
  }

  return (
    <>
      <div className={styles.schiffe}>
        <h2>Spieler 1</h2>
        <Schiff1/>
        {/* vielleicht erstmal simple mit visibility arbeiten bei Schiffkarte gezogen mit Teile Abgleich */}
        <h2> Spieler 2</h2>
        <Schiff2 className={transparent} />
      </div>
      <div className={styles.stack}>
        <Spieler1 />
        <Sammlung1 onChange={addChangeHandler}
          gold={currentGold}
          kanone={currentKanone}
        />
        <Stapel onZiehen={addClickHandler} />
        <Deck karte={randomKarte} />
        <Spieler2 />
        <Sammlung2/>
      </div>
    </>
  );
};

export default Spiel;
