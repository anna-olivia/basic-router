import styles from "../styles/Schiffsteile.module.css";
import { useGameLogic } from "../hooks/useGameLogik";


const Schiff1 = () => {
  const {
    transparentIndices,
  } = useGameLogic();

  const schiffsteile = ['1a', '1b','1c', '1d','1e','1f'];
  return (
    <section className={styles.teile1}>
    {schiffsteile.map((teil,index)=> <div key={teil} className={transparentIndices.includes(index) ? styles.transparent : ''}>
      {teil}
    </div>)}
    </section>
  );
};

export default Schiff1;
