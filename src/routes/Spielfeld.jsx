import { useState } from "react";
import styles from "../styles/Spielfeld.module.css";
import Schiff from "../components/Schiff";
import Stapel from "../components/Stapel";
import Spieler1 from "../components/Spieler1";
import Spieler2 from "../components/Spieler2";
import Sammlung1 from "../components/Sammlung1";
import Sammlung2 from "../components/Sammlung2";
import Deck from "../components/Deck";
import pirate from '../assets/images/pirate_640.png';
import gold from '../assets/images/gold.jpeg';
import kanone from '../assets/images/kanone.jpeg';

const set = [
  { type: 'gold', image: gold },
  { type: 'kanone', image: kanone },
  { type: 'pirate', image: pirate },
];

const Spiel = () => {
  const [currentGold, setCurrentGold] = useState(0);
  const [currentKanone, setCurrentKanone] = useState(0);
  const [randomKarte, setRandomKarte] = useState(null);

  const addClickHandler = () => {
    const getRandomKarte = set[Math.floor(Math.random() * set.length)];
    setRandomKarte(getRandomKarte);
    addChangeHandler(getRandomKarte);
//     beim Klicken hier auch addChangeHandler aufrufen
  }

  const addChangeHandler = (karte) => {
    switch(karte.type) {
      case 'gold':
        setCurrentGold(prevGold => prevGold + 1);
        break;
      case 'kanone':
        setCurrentKanone(prevKanone => prevKanone + 1);
        break;
      case 'pirate':
        if(currentKanone > 0) {
          setCurrentKanone(prevKanone => prevKanone - 1);
        } else {
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
        <Schiff />
        <h2> Spieler 2</h2>
        <Schiff />
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
