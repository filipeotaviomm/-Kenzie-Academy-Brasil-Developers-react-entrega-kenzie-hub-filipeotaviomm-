import { useForm } from "react-hook-form";
import { Input } from "../Input/input";
import { InputPassword } from "../InputPassword/inputPassword";
import { Select } from "../Select/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { api } from "../../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./style.module.scss";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      reset();
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response?.data.message === "Email already exists") {
        toast.error("E-mail já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const registration = (formData) => {
    userRegister(formData);
  };

  return (
    <div>
      <form
        className={styles.registerForm}
        onSubmit={handleSubmit(registration)}
      >
        <Input
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          id="name"
          {...register("name")}
          error={errors.name}
          disabled={loading}
        />
        <Input
          label="E-mail"
          type="email"
          placeholder="Digite aqui seu e-mail"
          id="email"
          {...register("email")}
          error={errors.email}
          disabled={loading}
        />
        <InputPassword
          label="Senha"
          placeholder="Digite aqui sua senha"
          id="password"
          {...register("password")}
          error={errors.password}
          disabled={loading}
        />
        <InputPassword
          label="Confirmar Senha"
          placeholder="Digite novamente sua senha"
          id="confirmPassword"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
          disabled={loading}
        />
        <Input
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          id="bio"
          {...register("bio")}
          error={errors.bio}
          disabled={loading}
        />
        <Input
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          id="contato"
          {...register("contact")}
          error={errors.contact}
          disabled={loading}
        />
        <Select
          label="Selecionar módulo"
          id="module"
          {...register("course_module")}
          error={errors.course_module}
          disabled={loading}
        />
        <button
          className="p2 lg standardButton maroon"
          type="submit"
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
      <ToastContainer autoClose={2 * 1000} />
    </div>
  );
};
