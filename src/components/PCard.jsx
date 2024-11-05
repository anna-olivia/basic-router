import styles from './Card.module.css';
import pirate from '../assets/images/pirate_640.png';

const PCard =({onButtonClick}) => {
    return (
        <>
        <div className={styles.container}>
        <img src={pirate} alt="Pirat" />
        <div className={styles.content}>
            <h2>Piraten</h2>
            <p>Wage dich in den Kampf gegen die berüchtigten Piratas</p>
            <button onClick={onButtonClick}>Start</button>
        </div>
        </div>
        </>
    );
};

export default PCard;