import styles from "../styles/Schiffsteile.module.css";
import { useGameLogic } from "../hooks/useGameLogik";
const Schiff2 = () => {
  const {
    transparentIndices,
  } = useGameLogic();
  
  const schiffsteile = ['2a', '2b','2c', '2d','2e','2f'];
  return (
    <section className={styles.teile2}>
    {schiffsteile.map((teil,index)=> <div key={teil} className={transparentIndices.includes(index) ? styles.transparent : ''}>
      {teil}
    </div>)}
    </section>
  );
};

export default Schiff2;
