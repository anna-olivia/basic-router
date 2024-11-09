import styles from '../styles/Sammlung.module.css'

const Sammlung1 = () => {
    return (
        <div className={styles.sammlung}>
            <ul>
                <li>Goldmünzen:{}</li>
                <li>Kanonen:{}</li>
                <li>Schiffteile von Spieler 2: {}</li>
            </ul>
        </div>
    );
};

export default Sammlung1;