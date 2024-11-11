import styles from '../styles/Sammlung.module.css'

const Sammlung2 = ({gold, kanone}) => {
    return (
        <div className={styles.sammlung2}>
            <ul>
                <li>Goldmünzen: {gold}</li>
                <li>Kanonen: {kanone}</li>
            </ul>
        </div>
    );
};

export default Sammlung2;