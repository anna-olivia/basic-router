// Spielfeld.js
import React from 'react';
import styles from "../styles/Spielfeld.module.css";
import Schiff1 from "../components/Schiff1";
import Schiff2 from "../components/Schiff2";

export const Spielfeld = ({transparentIndices}) => (
  <div className={styles.schiffe}>
    <h2>Spieler 1</h2>
    <Schiff1 transparentIndices={transparentIndices} />
    <h2> Spieler 2</h2>
    <Schiff2 transparentIndices={transparentIndices} />
  </div>
);

export default Spielfeld;