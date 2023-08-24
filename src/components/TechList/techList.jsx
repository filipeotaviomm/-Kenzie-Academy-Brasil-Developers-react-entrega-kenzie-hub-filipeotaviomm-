import styles from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard/techCard";

export const TechList = () => {
  const { techList } = useContext(TechContext);

  return (
    <div>
      {techList.length > 0 ? (
        <ul className={styles.list}>
          {techList?.map((tech) => (
            <TechCard key={tech.id} tech={tech} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};
