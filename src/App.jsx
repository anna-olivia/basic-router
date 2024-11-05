import Header from './components/Header';
import PCard from './components/PCard';
import SCard from './components/SCard';
import styles from './components/Landing.module.css';
import Anleitung from './components/Anleitung';


const App = () => {
  const handleButton = () => {
    alert("geklickt")
    // später mit routes arbeiten
  }

  return (
    <div className={styles.main}>
      <Header onButtonClick={handleButton}/>
      <SCard onButtonClick={handleButton}/>
      
      {/* <Anleitung/> */}
      
      <PCard onButtonClick={handleButton}/>
    </div>
  );
};

export default App;
