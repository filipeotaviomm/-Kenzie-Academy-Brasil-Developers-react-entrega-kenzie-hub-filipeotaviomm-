import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Forms/RegisterForm/registerForm";
import Logo from "../../assets/Logo.svg";
import pageStyles from "../../styles/modules/pageBox.module.scss";
import styles from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <div className={pageStyles.pageBox}>
      <div className="container">
        <header className={styles.head}>
          <img src={Logo} alt="Logo Kenzie Hub" />
          <Link className="back backButton" to={"/"}>
            Voltar
          </Link>
        </header>
        <main className={styles.mainRegister}>
          <div className={styles.h3P}>
            <h3 className="title">Crie uma conta</h3>
            <p className="p3 thin">Rápido e grátis, vamos nessa</p>
          </div>
          <RegisterForm />
        </main>
      </div>
    </div>
  );
};
