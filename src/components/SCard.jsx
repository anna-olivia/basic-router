import styles from './Card.module.css';
import schiff from '../assets/images/schiff_640.png';

const SCard =({onButtonClick}) => {
    return (
        <>
        <div className={styles.container}>
        <img src={schiff} alt="Piratenschiff" />
        <div className={styles.content}>
            <h2>Willkommen bei Piratas</h2>
            <p>ein digitales Kartenspiel</p>
            <button onClick={onButtonClick}>Anleitung</button>
        </div>
        </div>
        </>
    );
};

export default SCard;