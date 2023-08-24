import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";
import styles from "./style.module.scss";

export const ConfirmDeleteModal = () => {
  const { confirmDeleteTech, setConfirmDeleteTech, deleteTech } =
    useContext(TechContext);
  return (
    <div className={styles.overlayBox}>
      <div className={styles.modalBox}>
        <div className={styles.head}>
          <h3 className="title sm">Confirmação</h3>
          <button className="close" onClick={() => setConfirmDeleteTech(null)}>
            X
          </button>
        </div>
        <div className={styles.modalBody}>
          <p className="title2">
            Você tem certeza que deseja remover "
            <strong>{`${confirmDeleteTech.title}`}</strong>"?
          </p>
          <div className={styles.btns}>
            <button
              className={`p2 lg ${styles.btnYesNo} ${styles.yes}`}
              onClick={() => deleteTech(confirmDeleteTech.id)}
            >
              Sim, quero remover
            </button>
            <button
              className={`p2 lg ${styles.btnYesNo} ${styles.no}`}
              onClick={() => setConfirmDeleteTech(null)}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
