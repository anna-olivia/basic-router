import styles from './Card.module.css';

const Anleitung = ({onCloseModal}) => {
    return(
        <div className={`${styles.container} ${styles.wrapper}`}>
            <h2>Anleitung</h2>
            <p>hier soll dann ganz viel stehen, wie das Spiel geht etc.</p>
            <button onClick={onCloseModal}>Zurück</button>
        </div>
    );
};

export default Anleitung;