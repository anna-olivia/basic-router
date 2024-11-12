// Spiel.jsx
import React, { useEffect } from "react";
import styles from "../styles/Spielfeld.module.css";
import { useGameLogic } from "../hooks/useGameLogik";
import {Spielfeld} from './Spielfeld'
import { KartenAnzeige } from "./KartenAnzeige";
import Stapel from "./Stapel";
import Spieler1 from "./Spieler1";
import Spieler2 from "./Spieler2";
import Sammlung1 from "./Sammlung1";
import Sammlung2 from "./Sammlung2";

const Spiel = () => {
  const {
    currentGold,
    currentKanone,
    transparentIndices,
    karten,
    isFetching,
    error,
    fetchData,
    addChangeHandler
  } = useGameLogic();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Spielfeld transparentIndices={transparentIndices} />
      <div className={styles.stack}>
        <Spieler1 />
        <Sammlung1 onChange={addChangeHandler} gold={currentGold} kanone={currentKanone} />        
        <Stapel onZiehen={fetchData} />
        {error && <div>Error: {error} </div>}
        <KartenAnzeige karten={karten} isFetching={isFetching} />
        <Spieler2 />
        <Sammlung2 />
      </div>
    </>
  );
};

export default Spiel;
