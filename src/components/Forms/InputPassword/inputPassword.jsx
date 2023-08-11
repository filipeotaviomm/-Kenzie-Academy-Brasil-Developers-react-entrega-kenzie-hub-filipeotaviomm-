import { forwardRef, useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import styles from "./style.module.scss";

export const InputPassword = forwardRef(
  ({ error, label, id, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState("true");
    return (
      <div className={styles.inputBox}>
        <label className="p sm" htmlFor={id}>
          {label}
        </label>
        <div>
          <input
            className="p lg"
            id={id}
            type={isHidden ? "password" : "text"}
            ref={ref}
            {...rest}
          />
          <button type="button" onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        </div>
        {error ? <p className={styles.pError}>{error.message}</p> : null}
      </div>
    );
  }
);
