// KartenAnzeige.js
import React from 'react';
import styledCards from "../styles/Deck.module.css";
import schatz from "../assets/images/schatz.svg";

export const KartenAnzeige = ({ karten, isFetching }) => {
  if (isFetching) {
    return (
      <div className={styledCards.deck}>
        <figure>
          <img src={karten.image} alt="Ich zeige die gezogenen Karten an" />
          <figcaption>Gezogene Karte {karten.type}</figcaption>
        </figure>
      </div>
    );
  }
  return (
    <div className={styledCards.deck}>
      <figure>
        <img src={schatz} alt="Schatz" />
        <figcaption>Ziehe eine Karte vom obigen Stapel</figcaption>
      </figure>
    </div>
  );
};