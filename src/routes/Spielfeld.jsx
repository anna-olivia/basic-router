import styles from "../styles/Spielfeld.module.css";
import Schiff from "../components/Schiff";
import Stapel from "../components/Stapel";
import Spieler1 from "../components/Spieler1";
import Spieler2 from "../components/Spieler2";

import Deck from "../components/Deck";
const Spiel = () => {
  return (
    <>    <div className={styles.schiffe}>
      <h2>Spieler 1</h2>
      <Schiff />
      <h2>Spieler 2</h2>

      <Schiff/>
      {/* props um unterschiedliche player zu haben */}
      </div>
<div className={styles.stack}>
<Spieler1/>
      <Stapel />
      {/* Ziehstapel */}
{/* hier aufgedeckte KArten */}
<Deck />
      
      {/* "guten" Karten */}
      <Spieler2/>
      </div>
            </>

  );
};

export default Spiel;
