import styles from '../styles/Sammlung.module.css'

const Sammlung2 = () => {
    return (
        <div className={styles.sammlung}>
            <ul>
                <li>Goldmünzen:{}</li>
                <li>Kanonen:{}</li>
                <li>Schiffteile von Spieler 1: {}</li>
            </ul>
        </div>
    );
};

export default Sammlung2;