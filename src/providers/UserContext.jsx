import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const pathname = window.location.pathname;

  //requisição de auto-login
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHubToken"));
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(pathname);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      getUser();
    }
  }, []);

  const userRegister = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      reset();
      navigate("/");
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        toast.error("E-mail já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData, reset, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@KenzieHubToken", JSON.stringify(data.token));
      toast.success("Login realizado com sucesso");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      reset();
      navigate("/dashboard");
    } catch (error) {
      // console.log(error);
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

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@KenzieHubToken");
  };

  return (
    <UserContext.Provider
      value={{ userRegister, userLogin, user, userLogout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
