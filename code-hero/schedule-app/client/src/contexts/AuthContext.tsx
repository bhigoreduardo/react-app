import { useNavigate } from "react-router-dom";
import { ReactNode, createContext, useState } from "react";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";

import { api } from "../libs/apis";

interface IAuthProvider {
  children: ReactNode;
}

interface IAuthContextProps {
  login: ({ email, password }: ILogin) => void;
  logout: () => void;
  user: IUser;
}

interface IUser {
  name: string;
  email: string;
  avatarUrl: string;
}

interface ILogin {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as IAuthContextProps);

export default function AuthProvider({ children }: IAuthProvider) {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    if (user) return JSON.parse(user);
    return null;
  });

  async function login({ email, password }: ILogin) {
    try {
      const { data } = await api.post("/users/auth", {
        email,
        password,
      });
      const { token, refreshToken, user } = data;
      const userData = {
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl,
      };
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);

      navigate("/painel");
      toast.success("Login bem sucedido");
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("Falha durante o login, tente novamente.");
      }
    }
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}
