import { InputS } from "../../styles/components/Input";
import { PrimaryButtonS } from "../../styles/components/PrimaryButton";
import { HeadlineBoldS } from "../../styles/components/HeadlineBold";
import { LabelS } from "../../styles/components/Label";
import { Title1 } from "../../styles/components/Title1";
import { FormS } from "../../styles/components/Form";
import { useForm } from "react-hook-form";
import { SelectS } from "../../styles/components/Select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const FormRegister = ({setLoading}) => {
  const navigate = useNavigate();
  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório!")
      .min(6, "O nome precisa de um mínimo de 6 caracteres")
      .max(150, "O nome pode ter no máximo 150 caracteres."),
    email: yup
      .string()
      .required("Email obrigatório!")
      .email("Necessário que seja um email!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .matches(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula!")
      .matches(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula!")
      .matches(/(?=.*?[0-9])/, "É necessário ao menos um número!")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário ao menos uma caractere especial!"
      )
      .min(8, "Sua senha deve ter ao menos 8 caracteres!"),

    passwordConfirmation: yup
      .string()
      .required("Confirmação obrigatória!")
      .oneOf([yup.ref("password")], "As senhas devem coincidir"),

    bio: yup.string().required("Bio obrigatória!"),
    contact: yup.string().required("Informação de contato obrigatória!"),
    course_module: yup.string().required("Módulo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const submit = async (data) => {
    try {
      setLoading(true)
      // eslint-disable-next-line no-unused-vars
      const resp = await api.post("/users", data);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <FormS onSubmit={handleSubmit(submit)} noValidate>
      <Title1>Crie sua conta</Title1>
      <HeadlineBoldS>Rápido e grátis, vamos nessa!</HeadlineBoldS>
      <div className="InputBox">
        <LabelS htmlFor="">Nome</LabelS>
        <InputS placeholder="Digite aqui seu nome" {...register("name")} />
        {errors.name?.message && <p className="error">{errors.name.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Email</LabelS>
        <InputS placeholder="Digite aqui seu email" {...register("email")} />
        {errors.email?.message && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Senha</LabelS>
        <InputS
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
          />
          {errors.password?.message && <p className="error">{errors.password.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Confirmar senha</LabelS>
        <InputS
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("passwordConfirmation")}
          />
        {errors.passwordConfirmation?.message && (
          <p className="error">{errors.passwordConfirmation.message}</p>
          )}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Bio</LabelS>
        <InputS placeholder="Fale sobre você" {...register("bio")} />
        {errors.bio?.message && <p className="error">{errors.bio.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Contato</LabelS>
        <InputS placeholder="Opção de conato" {...register("contact")} />
        {errors.contact?.message && <p className="error">{errors.contact.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Módulo</LabelS>
        <SelectS {...register("course_module")}>
          <option value="">Selecionar Módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </SelectS>
        {errors.course_module?.message && <p className="error">{errors.course_module.message}</p>}
      </div>
      <PrimaryButtonS type="submit">Criar conta</PrimaryButtonS>
    </FormS>
  );
};
