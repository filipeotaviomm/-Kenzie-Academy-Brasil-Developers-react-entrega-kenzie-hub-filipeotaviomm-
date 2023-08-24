import { forwardRef } from "react";
import styles from "./style.module.scss";

export const SelectModal = forwardRef(
  ({ label, id, children, error, ...rest }, ref) => {
    return (
      <div className={styles.selectBox}>
        <label className="p sm" htmlFor={id}>
          {label}
        </label>
        <select className="optionSelect" id={id} ref={ref} {...rest}>
          {children}
        </select>
        {error ? <p className={styles.pError}>{error.message}</p> : null}
      </div>
    );
  }
);
