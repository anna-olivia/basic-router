import { useState, useEffect } from "react";
import styles from "../styles/Spielfeld.module.css";
import styledCards from '../styles/Deck.module.css';
import Schiff1 from "../components/Schiff1";
import Schiff2 from "../components/Schiff2";
import Stapel from "../components/Stapel";
import Spieler1 from "../components/Spieler1";
import Spieler2 from "../components/Spieler2";
import Sammlung1 from "../components/Sammlung1";
import Sammlung2 from "../components/Sammlung2";
import pirate from '../assets/images/pirate_640.png';
import gold from '../assets/images/gold.svg';
import kanone from '../assets/images/kanone.svg';
import schiffsteil from '../assets/images/schiffsteil.svg';

import schatz from '../assets/images/schatz.svg';

const Spiel = () => {
  const [currentGold, setCurrentGold] = useState(0);
  const [currentKanone, setCurrentKanone] = useState(0);
  // const [randomKarte, setRandomKarte] = useState(null);
  const [transparentIndices, setTransparentIndices] = useState([]);
  const [karten, setKarten] = useState([])
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  
 
  
      async function fetchData(){
        setIsFetching(true);
        setError(null);
        try {
          const response = await fetch("http://localhost:8080/karten");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const resData = await response.json();
          const randomKarte = resData.karten[Math.floor(Math.random() * resData.karten.length)];
          setKarten(randomKarte);
          addChangeHandler(randomKarte);
        } catch (e) {
          setError(e.message || "Irgendwas stimmt nicht!");
        } finally {
          setIsFetching(false);
        }
      }
    
    

    const addClickHandler = () => {

      fetchData();
    
    }
    useEffect(() => {
      fetchData();
    }, []);

  const addChangeHandler = (randomKarte) => {
    switch(randomKarte.type) {
      case 'gold':
        setCurrentGold(prevGold => prevGold + 1);
        break;
      case 'kanone':
        setCurrentKanone(prevKanone => prevKanone + 1);
        break;
        case 'schiffsteil':
    
          setTransparentIndices(prevIndices => {
            const newIndex = prevIndices.length;
            if (newIndex < 6) { //  es gibt 6 Schiffsteile
              return [...prevIndices, newIndex];
            }
            return prevIndices; // Wenn alle Teile bereits transparent sind
          });
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
        <Schiff1 transparentIndices={transparentIndices}/>
        <h2> Spieler 2</h2>
        <Schiff2 transparentIndices={transparentIndices}/>
      </div>
      <div className={styles.stack}>
        <Spieler1 />
        <Sammlung1 onChange={addChangeHandler}
          gold={currentGold}
          kanone={currentKanone}
        />
        <Stapel onZiehen={addClickHandler} />
        {!isFetching && (
        <div className={styledCards.deck}>
        
        <figure>
           <img src={karten.image} alt="Ich zeige die gezogenen Karten an" />
           {/* {}karten.image stimmt nicht - bild wird nicht angezeigt - pfad kontrollieren etc. */}
                <figcaption>Gezogene Karte{karten.type}</figcaption>
        </figure>
            
          
        </div>
      )}
      {error && (<div>Error: {error} </div>)}
      {isFetching && (
       <div className={styledCards.deck}>
        
       <figure>
           <img src={schatz} alt="Schatz" />
           <figcaption>Ziehe eine Karte vom obigen Stapel</figcaption>
       </figure>
     </div>
      )}
      
    
      


        <Spieler2 />
        <Sammlung2/>
      </div>
    </>
  );
};

export default Spiel;
