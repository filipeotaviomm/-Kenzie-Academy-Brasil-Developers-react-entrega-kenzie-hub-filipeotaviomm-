import { useForm } from "react-hook-form";
import { Input } from "../Input/input";
import { InputPassword } from "../InputPassword/inputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { api } from "../../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./style.module.scss";

export const LoginForm = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@KenzieHubToken", JSON.stringify(data.token));
      toast.success("Login realizado com sucesso");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      reset();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("E-mail ou senha incorreta");
      }
    } finally {
      setLoading(false);
    }
  };

  const login = (formData) => {
    userLogin(formData);
  };

  return (
    <div>
      <form className={styles.loginForm} onSubmit={handleSubmit(login)}>
        <Input
          label="E-mail"
          type="mail"
          id="email"
          {...register("email")}
          error={errors.email}
          disabled={loading}
        />
        <InputPassword
          label="Senha"
          id="password"
          {...register("password")}
          error={errors.password}
          disabled={loading}
        />
        <button
          className="p2 lg standardButton pink"
          type="submit"
          disabled={loading}
        >
          Entrar
        </button>
      </form>
      <ToastContainer autoClose={2 * 1000} />
    </div>
  );
};
