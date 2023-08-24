import { useContext } from "react";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "../../Input/input";
import { SelectModal } from "../../SelectModal/selectModal";
import { TechContext } from "../../../../providers/TechContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { TechModalSchema } from "../TechModalSchema";

export const EditTechModal = () => {
  const { editingTech, setEditingTech, editTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TechModalSchema),
    values: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const submit = (formData) => {
    editTech(formData);
  };

  return (
    <div className={styles.overlayBox}>
      <form className={styles.modalBox} onSubmit={handleSubmit(submit)}>
        <div className={styles.head}>
          <h3 className="title3">Editar tecnologia</h3>
          <button className="close" onClick={() => setEditingTech(null)}>
            X
          </button>
        </div>
        <div className={styles.formBody}>
          <Input
            label="Nome"
            id="title"
            type="text"
            variant="labelModal"
            error={errors.title}
            readOnly={true}
            {...register("title")}
          />
          <SelectModal
            label="Selecionar status"
            id="status"
            error={errors.status}
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </SelectModal>
          <button className={`p2 lg ${styles.editTech}`} type="submit">
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
};
