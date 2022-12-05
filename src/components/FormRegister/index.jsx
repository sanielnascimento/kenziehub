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

export const FormRegister = () => {
  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório!")
      .min(3, "O nome precisa de um mínimo de 3 caracteres")
      .max(200, "O nome pode ter no máximo 200 caracteres."),
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
    bio: yup.string().required("Bio obrigatória!"),
    contact: yup.string().required("Número de contato obrigatório!"),
    course_module: yup.string().required("Módulo Obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <FormS onSubmit={handleSubmit(submit)}>
      <Title1>Crie sua conta</Title1>
      <HeadlineBoldS>Rápido e grátis, vamos nessa!</HeadlineBoldS>
      <div className="InputBox">
        <LabelS htmlFor="">Nome</LabelS>
        <InputS
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Email</LabelS>
        <InputS
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Senha</LabelS>
        <InputS type="password" placeholder="Digite aqui sua senha" />
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Confirmar senha</LabelS>
        <InputS
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Bio</LabelS>
        <InputS
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        {errors.bio?.message && <p>{errors.bio.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Contato</LabelS>
        <InputS
          type="tel"
          placeholder="Opção de conato"
          {...register("contact")}
        />
        {errors.contact?.message && <p>{errors.contact.message}</p>}
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Módulo</LabelS>
        <SelectS {...register("course_module")}>
          <option value="">Selecionar Módulo</option>
          <option value="1o Módulo">Primeiro módulo</option>
          <option value="2o Módulo">Segundo Módulo</option>
          <option value="3o Módulo">Terceiro Módulo</option>
        </SelectS>
        {errors.course_module?.message && <p>{errors.course_module.message}</p>}

      </div>
      <PrimaryButtonS type="submit">Entrar</PrimaryButtonS>
    </FormS>
  );
};
