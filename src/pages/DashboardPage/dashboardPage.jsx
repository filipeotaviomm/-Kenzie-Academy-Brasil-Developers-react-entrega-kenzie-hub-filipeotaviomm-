import { useContext } from "react";
import { HeaderDashboard } from "../../components/HeaderDashBoard/headerDashboard";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList/techList";
import plusButton from "../../assets/plusButton.svg";
import { TechContext } from "../../providers/TechContext";
import { CreateTechModal } from "../../components/Forms/Modal/CreateTechModal/createTechModal";
import { EditTechModal } from "../../components/Forms/Modal/EditTechModal/editTechModal";
import { ConfirmDeleteModal } from "../../components/Forms/Modal/ConfirmDeleteModal/confirmDeleteModal";

export const DashboardPage = () => {
  const { user } = useContext(UserContext);
  const { isVisible, setIsVisible, editingTech, confirmDeleteTech } =
    useContext(TechContext);

  return (
    <div className="containerDashboard">
      <HeaderDashboard />
      <main>
        <div className={styles.userName}>
          <h3 className="title">Olá, {user?.name}</h3>
          <p className="p3 thin">{user?.course_module}</p>
        </div>
        <div className={styles.boardBody}>
          <h3 className="title2">Tecnologias</h3>
          <button
            title="Adicionar"
            aria-label="add"
            onClick={() => setIsVisible(true)}
          >
            <img src={plusButton} alt="Adicionar tecnologia" />
          </button>
        </div>
        <TechList />
      </main>
      {isVisible ? <CreateTechModal /> : null}
      {editingTech ? <EditTechModal /> : null}
      {confirmDeleteTech ? <ConfirmDeleteModal /> : null}
    </div>
  );
};
