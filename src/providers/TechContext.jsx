import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [editingTech, setEditingTech] = useState(null);
  const [confirmDeleteTech, setConfirmDeleteTech] = useState(null);

  useEffect(() => {
    const getTech = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("@KenzieHubToken"));
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTechList(data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    getTech();
  }, []);

  const createTech = async (formData, reset) => {
    try {
      const token = JSON.parse(localStorage.getItem("@KenzieHubToken"));
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList([...techList, data]);
      toast.success("Tecnologia cadastrada com sucesso");
      reset();
      setIsVisible(false);
    } catch (error) {
      if (
        error.response?.data.message ===
        "User Already have this technology created you can only update it"
      ) {
        toast.error("Essa tecnologia já foi cadastrada");
      }
    }
  };

  const deleteTech = async (removedId) => {
    try {
      const token = JSON.parse(localStorage.getItem("@KenzieHubToken"));
      await api.delete(`/users/techs/${removedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const techListFiltered = techList.filter((tech) => tech.id !== removedId);
      setTechList(techListFiltered);
      toast.success(`"${confirmDeleteTech.title}" foi removido com sucesso`);
      setConfirmDeleteTech(null);
    } catch (error) {
      console.log(error);
    }
  };

  const editTech = async (formData) => {
    try {
      const token = JSON.parse(localStorage.getItem("@KenzieHubToken"));
      const { data } = await api.put(
        `/users/techs/${editingTech.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newTechList = techList.map((tech) => {
        if (tech.id === editingTech.id) {
          return data;
        } else {
          return tech;
        }
      });

      setTechList(newTechList);
      toast.success(`"${editingTech.title}" foi atualizado com sucesso`);
      setEditingTech(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techList,
        createTech,
        isVisible,
        setIsVisible,
        deleteTech,
        confirmDeleteTech,
        setConfirmDeleteTech,
        editingTech,
        setEditingTech,
        editTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
