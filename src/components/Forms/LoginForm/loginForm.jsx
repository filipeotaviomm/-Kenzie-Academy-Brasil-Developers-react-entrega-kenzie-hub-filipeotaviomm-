import { useForm } from "react-hook-form";
import { Input } from "../Input/input";
import { InputPassword } from "../InputPassword/inputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";
import { ImSpinner3 } from "react-icons/im";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const login = (formData) => {
    userLogin(formData, reset, setLoading);
  };

  return (
    <div>
      <form className={styles.loginForm} onSubmit={handleSubmit(login)}>
        <Input
          label="E-mail"
          type="mail"
          id="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
          error={errors.email}
          disabled={loading}
        />
        <InputPassword
          label="Senha"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
          error={errors.password}
          disabled={loading}
        />
        <button
          className="p2 lg standardButton pink"
          type="submit"
          disabled={loading}
        >
          {loading ? <ImSpinner3 className={styles.spinner} /> : "Entrar"}
        </button>
      </form>
    </div>
  );
};
