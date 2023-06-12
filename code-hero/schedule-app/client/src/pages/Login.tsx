import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

import { api } from "../libs/apis";
import { Input } from "../components/Input";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";
import style from "./Login.module.css";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

const registerSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "Informe pelo meno 6 caracteres")
    .required("Senha é obrigatório"),
});

interface ILogin {
  email: string;
  password: string;
}
interface IRegister {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(isLogin ? loginSchema : registerSchema),
  });
  const { login } = useAuth();

  const submit = handleSubmit(async (data) => {
    if (isLogin) {
      login({ email: data.email, password: data.password });
    } else {
      await api.post("/users", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      setIsLogin(true);
    }
  });

  return (
    <div className={style.login}>
      <form onSubmit={submit} className={style.form}>
        {!isLogin && (
          <Input
            placeholder="Nome"
            Icon={BsFillPersonFill}
            {...register("name", { required: true })}
            error={errors.name && errors.name.message}
          />
        )}
        <Input
          placeholder="Email"
          Icon={AiOutlineMail}
          type="email"
          {...register("email", { required: true })}
          error={errors.email && errors.email.message}
        />
        <Input
          placeholder="Senha"
          Icon={RiLockPasswordFill}
          type="password"
          {...register("password", { required: true })}
          error={errors.password && errors.password.message}
        />
        <Button
          type="submit"
          title={isLogin ? "Entrar" : "Cadastrar"}
          content={isLogin ? "Entrar" : "Cadastrar"}
        />
        <p className={style.toggle}>
          {isLogin ? "Não possui conta?" : "Já possui conta?"}
          <Button
            title={isLogin ? "Cadastrar" : "Entrar"}
            content={isLogin ? "Cadastrar" : "Entrar"}
            onClick={() => setIsLogin(!isLogin)}
          />
        </p>
      </form>
    </div>
  );
};

export default Login;
