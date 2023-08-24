import { useForm } from "react-hook-form";
import { useContext } from "react";
import styles from "./style.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../Input/input";
import { SelectModal } from "../../SelectModal/selectModal";
import { TechContext } from "../../../../providers/TechContext";
import { TechModalSchema } from "../TechModalSchema";

export const CreateTechModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(TechModalSchema),
  });

  const { createTech, setIsVisible } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData, reset);
  };

  return (
    <div className={styles.overlayBox}>
      <form className={styles.modalBox} onSubmit={handleSubmit(submit)}>
        <div className={styles.head}>
          <h3 className="title3">Cadastrar tecnologia </h3>
          <button className="close" onClick={() => setIsVisible(false)}>
            X
          </button>
        </div>
        <div className={styles.formBody}>
          <Input
            label="Nome"
            placeholder="Nome da tecnologia"
            id="title"
            type="text"
            variant="labelModal"
            error={errors.title}
            {...register("title")}
          />
          <SelectModal
            label="Selecionar status"
            id="status"
            error={errors.status}
            {...register("status")}
          >
            <option value="">Escolha um nível</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </SelectModal>
          <button className={`p2 lg ${styles.registerTech}`} type="submit">
            Cadastrar tecnologia
          </button>
        </div>
      </form>
    </div>
  );
};
