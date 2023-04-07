import styles from "./Header.module.css";

import IgniteLogo from "../../assets/ignite-logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
};
