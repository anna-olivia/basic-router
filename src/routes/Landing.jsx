import { Outlet } from 'react-router-dom';
import PCard from '../components/PCard';
import SCard from '../components/SCard';
import styles from '../styles/Landing.module.css';


const Landing = () => {
  const handleButton = () => {
    alert("geklickt")
    // später mit routes arbeiten
  }

  return (
    <div className={styles.main}>
      <Outlet />
      <SCard onButtonClick={handleButton}/>
      <PCard onButtonClick={handleButton}/>
    </div>
  );
};

export default Landing;
