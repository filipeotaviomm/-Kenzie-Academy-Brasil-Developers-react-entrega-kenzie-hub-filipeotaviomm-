import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Select = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <div className={styles.selectBox}>
      <label className="p sm" htmlFor={id}>
        {label}
      </label>
      <select className="p lg" id={id} ref={ref} {...rest}>
        <option className="optionSelect" value="">
          Selecione um módulo
        </option>
        <option className="optionSelect" value="Primeiro módulo">
          Primeiro módulo
        </option>
        <option className="optionSelect" value="Segundo módulo">
          Segundo módulo
        </option>
        <option className="optionSelect" value="Terceiro módulo">
          Terceiro módulo
        </option>
      </select>
      {error ? <p className={styles.pError}>{error.message}</p> : null}
    </div>
  );
});
