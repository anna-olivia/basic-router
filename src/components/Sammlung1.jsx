import styles from '../styles/Sammlung.module.css'

const Sammlung1 = ({gold,kanone}) => {
    return (
        <div className={styles.sammlung}>
            <ul>
                <li>Goldmünzen:{gold}</li>
                <li>Kanonen:{kanone}</li>
            </ul>
        </div>
    );
};

export default Sammlung1;