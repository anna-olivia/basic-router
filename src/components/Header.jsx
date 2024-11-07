import styles from "../styles/Header.module.css";
import logo from "../assets/images/logo_640.png";
import btnStyles from '../styles/Button.module.css'
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
    <Link to="/" className={btnStyles.link}>
      <div className={styles.background}></div>
      <img
        className={styles.logo}
        src={logo}
        alt="Logo"
      />
     </Link>
    </>
  );
};

export default Header;
