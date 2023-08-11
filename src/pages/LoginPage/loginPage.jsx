import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm/loginForm";
import Logo from "../../assets/Logo.svg";
import pageStyles from "../../styles/modules/pageBox.module.scss";
import styles from "./style.module.scss";

export const LoginPage = ({ setUser }) => {
  return (
    <div className={pageStyles.pageBox}>
      <div className="container">
        <header className={styles.headLogo}>
          <img src={Logo} alt="Logo Kenzie Hub" />
        </header>
        <main className={styles.mainLogin}>
          <h1 className="title">Login</h1>
          <LoginForm setUser={setUser} />
          <div className={styles.pLink}>
            <p className="p3 bold">Ainda não possui uma conta?</p>
            <Link className="p2 lg standardButton grey" to="/register">
              Cadastre-se
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};
