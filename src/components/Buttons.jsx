import styles from '../styles/ButtonGroup.module.css';
const Buttons = () => {
  return (
    <section className={styles.buttonGroup}>
      <button>Kaufen</button>
      {/* falls Münzen und anderer Spieler Schiffsteile */}
      {/* fallback rückmeldung bei Klick wenn keine Goldmünzen vorhanden */}
      <button>Abwehren</button>
      {/* falls mehr als 3 Karten in Sammlung oder Kanone */}
      {/* Fallback falls nichts davon */}
      <button>Aufhören</button>
      {/* falls man aufhören will, dann ist nächster Spieler dran - bei Pirat automatisch anderer Spieler auch wenn Abwehr */}
    </section>
  );
};

export default Buttons;
