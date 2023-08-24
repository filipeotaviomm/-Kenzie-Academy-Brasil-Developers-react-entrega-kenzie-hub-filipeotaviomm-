import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { deleteTech, setConfirmDeleteTech, setEditingTech } =
    useContext(TechContext);

  return (
    <>
      <li className={styles.card}>
        <h3 className="title sm">{tech.title}</h3>
        <div className={styles.spanButtons}>
          <span className="p3 thin">{tech.status}</span>
          <div className={styles.btns}>
            <button
              onClick={() => setEditingTech(tech)}
              title="Editar"
              aria-label="edit"
              className={styles.buttonEditRemove}
            >
              <MdOutlineModeEditOutline />
            </button>
            <button
              onClick={() => setConfirmDeleteTech(tech)}
              title="Remover"
              aria-label="remove"
              className={styles.buttonEditRemove}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
