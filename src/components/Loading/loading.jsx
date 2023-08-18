import styles from "./style.module.scss";
import Load from "../../assets/Load.svg"; //loading.io (svg animated)

export const Loading = () => {
  return (
    <div className={styles.loadBox}>
      <img src={Load} alt="Carregando" />
    </div>
  );
};
