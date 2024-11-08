import styles from "../styles/Spielfeld.module.css";
import Schiff from "../components/Schiff";
import Stapel from "../components/Stapel";
import Sammlung from "../components/Sammlung";
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
<Deck />
{/* hier aufgedeckte KArten */}
      <Stapel />
      {/* Ziehstapel */}
      <Sammlung/>
      {/* "guten" Karten */}
      </div>
            </>

  );
};

export default Spiel;
