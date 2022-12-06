import { InputS } from "../../styles/components/Input";
import { PrimaryButtonS } from "../../styles/components/PrimaryButton";
import { DisabledButtonS } from "../../styles/components/DisabledButton";
import { HeadlineBoldS } from "../../styles/components/HeadlineBold";
import { LabelS } from "../../styles/components/Label";
import { Title1 } from "../../styles/components/Title1";
import { FormS } from "../../styles/components/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";

export const FormLogin = ({ toRegister }) => {
  const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório!"),
    password: yup.string().required("Senha obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data) => {
    try {
      const resp = await api.post("/sessions", { ...data });
      console.log(resp);
    } catch (error) {
      console.error(error);
    }
    console.log({...data});
  };

  return (
    <FormS onSubmit={handleSubmit(submit)} noValidate>
      <Title1>Login</Title1>
      <div className="InputBox">
        <LabelS htmlFor="">Email</LabelS>
        <InputS
          type="text"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Senha</LabelS>
        <InputS
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
      </div>
      <PrimaryButtonS type="submit">Entrar</PrimaryButtonS>
      <HeadlineBoldS>Ainda não possui uma conta?</HeadlineBoldS>
      <DisabledButtonS type="button" onClick={toRegister}>
        Cadastre-se
      </DisabledButtonS>
    </FormS>
  );
};
