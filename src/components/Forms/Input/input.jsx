import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, label, id, ...rest }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label className="p sm" htmlFor={id}>
        {label}
      </label>
      <input className="p lg" id={id} ref={ref} {...rest} />
      {error ? <p className={styles.pError}>{error.message}</p> : null}
    </div>
  );
});
