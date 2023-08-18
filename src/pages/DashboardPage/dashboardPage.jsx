import { useContext } from "react";
import { HeaderDashboard } from "../../components/HeaderDashBoard/headerDashboard";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const DashboardPage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="containerDashboard">
      <HeaderDashboard />
      <main>
        <div className={styles.userName}>
          <h3 className="title">Olá, {user?.name}</h3>
          <p className="p3 thin">{user?.course_module}</p>
        </div>
        <div className={styles.boardBody}>
          <h3 className="title">Que pena! Estamos em desenvolvimento :(</h3>
          <p className="p lg">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </main>
    </div>
  );
};
