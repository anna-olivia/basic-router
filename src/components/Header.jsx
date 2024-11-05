import styles from "./Header.module.css";
import logo from "../assets/images/logo_640.png";

const Header = ({ onButtonClick }) => {
  return (
    <>
      <div className={styles.background}></div>
      <img
        className={styles.logo}
        src={logo}
        alt="Logo"
        onClick={onButtonClick}
      />
    </>
  );
};

export default Header;
