import styles from '../styles/Card.module.css';
import schiff from '../assets/images/schiff_640.png';
import { Link } from 'react-router-dom';

const SCard =() => {
    return (
        <>
        <div className={styles.container}>
        <img src={schiff} alt="Piratenschiff" />
        <div className={styles.content}>
            <h2>Willkommen bei Piratas</h2>
            <p>ein digitales Kartenspiel</p>
            <Link to="/anleitung" className={styles.button}>Anleitung</Link>
        </div>
        </div>
        </>
    );
};

export default SCard;