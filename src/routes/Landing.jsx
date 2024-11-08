import { Outlet } from 'react-router-dom';
import PCard from '../components/PCard';
import SCard from '../components/SCard';
import styles from '../styles/Landing.module.css';


const Landing = () => {
  
  return (
    <div className={styles.main}>
      <Outlet />
      <SCard/>
      <PCard/>
    </div>
  );
};

export default Landing;
