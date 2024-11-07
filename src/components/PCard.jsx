import styles from '../styles/Card.module.css';
import pirate from '../assets/images/pirate_640.png';
import { Link } from 'react-router-dom';

const PCard =({onButtonClick}) => {
    return (
        <>
        <div className={styles.container}>
        <img src={pirate} alt="Pirat" />
        <div className={styles.content}>
            <h2>Piraten</h2>
            <p>kämpfe jetzt gegen die Piratas</p>
            <Link to="/spiel" className={styles.button}>Start</Link>
        </div>
        </div>
        </>
    );
};

export default PCard;