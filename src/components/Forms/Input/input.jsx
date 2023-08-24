import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(
  ({ error, label, id, variant, readOnly, ...rest }, ref) => {
    return (
      <div className={`${styles.inputBox}`}>
        <label className={`p sm ${styles[variant]}`} htmlFor={id}>
          {label}
        </label>
        <input
          readOnly={readOnly}
          className="p lg"
          id={id}
          ref={ref}
          {...rest}
        />
        {error ? <p className={styles.pError}>{error.message}</p> : null}
      </div>
    );
  }
);
