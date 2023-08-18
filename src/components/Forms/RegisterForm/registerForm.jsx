import { useForm } from "react-hook-form";
import { Input } from "../Input/input";
import { InputPassword } from "../InputPassword/inputPassword";
import { Select } from "../Select/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const registration = (formData) => {
    userRegister(formData, setLoading, reset);
  };

  return (
    <div>
      <form
        className={styles.registerForm}
        onSubmit={handleSubmit(registration)}
      >
        <Input
          className={styles.inputName}
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          id="name"
          {...register("name")}
          error={errors.name}
          disabled={loading}
        />
        <Input
          className={styles.inputEmail}
          label="E-mail"
          type="email"
          placeholder="Digite aqui seu e-mail"
          id="email"
          {...register("email")}
          error={errors.email}
          disabled={loading}
        />
        <InputPassword
          className={styles.inputPassword}
          label="Senha"
          placeholder="Digite aqui sua senha"
          id="password"
          {...register("password")}
          error={errors.password}
          disabled={loading}
        />
        <InputPassword
          className={styles.inputConfirmPassword}
          label="Confirmar Senha"
          placeholder="Digite novamente sua senha"
          id="confirmPassword"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
          disabled={loading}
        />
        <Input
          className={styles.inputBio}
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          id="bio"
          {...register("bio")}
          error={errors.bio}
          disabled={loading}
        />
        <Input
          className={styles.inputContact}
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
          className={`p2 lg standardButton maroon ${styles.btnAnime}`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};
