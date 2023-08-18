import { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const HeaderDashboard = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <header className={styles.headDash}>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <button onClick={() => userLogout()} className="p3 bold backButton">
        Sair
      </button>
    </header>
  );
};
