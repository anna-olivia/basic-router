import styles from "../styles/Button.module.css";
import Modal from "../components/Modal";
import containerStyle from "../styles/Anleitung.module.css";
import { Link } from "react-router-dom";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Anleitung = () => {
  return (
    <Modal>
      <div className={containerStyle.wrapper}>
        <h2>Anleitung</h2>
        
          <ul>
            <li>
              <TagFacesIcon /> 5-99 Jahre
            </li>
            <li>
              <Diversity3Icon /> 2 bis 4 Spieler
            </li>
            <li>
              <Inventory2Icon /> <span>Inhalt:</span> 55 Karten: 24 Schiffsteile
              (je 6 in 4 Farben), 20 Goldmünzen, 8 Piraten, 3 Kanonen
            </li>
            <li>
              <EmojiEventsIcon /> <span>Ziel des Spiels:</span> Baue als Erster
              ein Schiff in deiner Farbe.
            </li>
            <li>
              <MenuBookIcon /> <span>Spielvorbereitung:</span> Mischt die Karten
              und legt sie verdeckt als Stapel in die Tischmitte.
            </li>
          </ul>
          <div className={containerStyle.anleitung}>
          <section >
            <p>
              <span>Spielverlauf:</span> Die Spieler sind im Uhrzeigersinn
              einzeln nacheinander an der Reihe. Der jüngste Spieler zieht eine
              Karte beginnt. Immer wenn ein Spielverlauf: Die Spieler sind im
              Uhrzeigersinn einzeln nacheinander an der Reihe. Der jüngste
              Spieler zieht eine Karte beginnt. Immer wenn ein Spieler am Zug
              ist, muss er mindestens eine Karte ziehen (außer er kauft eine
              Karte) und sie den Mitspielern zeigen; dann kann er entscheiden,
              ob er weiter Karten ziehen oder aufhören und den Zug an den
              nächsten Spieler weitergeben möchte.
            </p>
            <p>
              <span>Beim Ziehen einer Karte gibt es 4 Möglichkeiten:</span>
            </p>
            <p>
              <span>Schiff:</span> Falls der Spieler noch kein Schiff baut, legt
              er die Karte vor sich ab und muss jetzt ein Schiff in dieser Farbe
              bauen (außer ein anderer Spieler baut bereits ein Schiff in dieser
              Farbe). In den nächsten Runden kann der Spieler alle Schiff-
              Karten dieser Farbe benutzen, um sein Schiff weiterzubauen. Alle
              Schiff-Karten in anderen Farben legt er rechts von sich ab (er
              kann sie später abwerfen oder verkaufen). Nachdem der Spieler eine
              Schiff-Karte gezogen hat, darf er weiter Karten ziehen.
            </p>
            <p>
              <span>Kanone: </span> Der Spieler legt die Karte rechts von sich
              ab und darf weiter Karten ziehen.
            </p>
          </section>
          <section>
            <p>
              <span>Goldmünze:</span> Der Spieler legt die Karte rechts von sich
              ab und darf weiter Karten ziehen.
            </p>
            <p>
              <span>Pirat:</span>
              Pech gehabt! Der Spieler muss 3 seiner Karten (Goldmünzen,
              Schiff-Karten von anderen Spielern oder seine eigenen!) und den
              Piraten auf den Ablagestapel legen. Hat er nur noch weniger als 3
              Karten, legt er alle verbleibenden Karten ab. Hat der Spieler eine
              Kanone, kann er damit den Piraten unschädlich machen: Er legt den
              Piraten zusammen mit der Kanone auf den Ablagestapel und muss
              keine weiteren Karten ablegen. Nachdem er einen Piraten gezogen
              hat, darf der Spieler nicht weiter Karten ziehen und der nächste
              Spieler ist an der Reihe.
            </p>
            <p>
              <span>Eine Karte kaufen:</span>Mit Goldmünzen-Karten können
              Spieler Schiff-Karten von anderen Spielern kaufen, um sein eigenes
              Schiff fertig zu bauen (3 Goldmünzen-Karten werden gegen 1
              Schiff-Karte getauscht). - Kauft ein Spieler in seinem Zug eine
              Schiff-Karte, zieht er keine Karte vom Stapel. - Pro Zug dürfen
              Spieler nur 1 Karte kaufen. - Der andere Spieler kann nicht
              verhindern, dass ihm eine Schiff-Karte abgekauft wird. - Kein
              Spieler darf eine Schiff-Karte kaufen, die nicht seine Farbe hat.
            </p>
            <p>
              Ist der Stapel aufgebraucht, mischt ihr die Karten des
              Ablagestapels und legt sie als neuen Stapel bereit
            </p>
            <p>
              <span>Spielende:</span>Wer als Erster ein komplettes Schiff baut
              (6 Schiff- Karten einer Farbe), gewinnt!
            </p>
            <span>Die Anleitung stammt von dem <a href="https://youtu.be/bbb5B-n3SrE">analogen Kartenspiel "Piratatak"</a> von Grégory Kirszbaum
            und Alex Sanders</span>
          </section>
         
        </div>

        <section className={styles.actions}>
          <Link to="/" className={styles.button}>
            Zurück
          </Link>
        </section>
      </div>
    </Modal>
  );
};

export default Anleitung;
