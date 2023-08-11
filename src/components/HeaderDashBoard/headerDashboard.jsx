import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const HeaderDashboard = ({ userLogout }) => {
  return (
    <header className={styles.headDash}>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <button onClick={() => userLogout()} className="p3 bold backButton">
        Sair
      </button>
    </header>
  );
};
