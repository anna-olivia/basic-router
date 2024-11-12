// useGameLogic.js
import { useState, useCallback } from 'react';

export const useGameLogic = () => {
  const [currentGold, setCurrentGold] = useState(0);
  const [currentKanone, setCurrentKanone] = useState(0);
  const [transparentIndices, setTransparentIndices] = useState([]);
  const [karten, setKarten] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
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
      setTimeout(() => addChangeHandler(randomKarte), 1500);
    } catch (e) {
      setError(e.message || "Irgendwas stimmt nicht!");
    } finally {
      setIsFetching(false);
    }
  }, []);

  const addChangeHandler = useCallback((randomKarte) => {
    switch (randomKarte.type) {
      case "gold":
        setCurrentGold(prevGold => prevGold + 1);
        break;
      case "kanone":
        setCurrentKanone(prevKanone => prevKanone + 1);
        break;
      case "schiffsteil":
        setTransparentIndices(prevIndices => {
          const newIndex = prevIndices.length;
          return newIndex < 6 ? [...prevIndices, newIndex] : prevIndices;
        });
        break;
      case "pirate":
        if (currentKanone > 0) {
          setCurrentKanone(prevKanone => prevKanone - 1);
        } else {
          alert("Spieler 2 an der Reihe");
        }
        break;
      default:
        alert("Unbekannte Karte");
    }
  }, [currentKanone]);

  return {
    currentGold,
    currentKanone,
    transparentIndices,
    karten,
    isFetching,
    error,
    fetchData,
    addChangeHandler
  };
};
