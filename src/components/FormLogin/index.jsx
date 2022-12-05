import { InputS } from "../../styles/components/Input";
import { PrimaryButtonS } from "../../styles/components/PrimaryButton";
import { DisabledButtonS } from "../../styles/components/DisabledButton";
import { HeadlineBoldS } from "../../styles/components/HeadlineBold";
import { LabelS } from "../../styles/components/Label";
import { Title1 } from "../../styles/components/Title1";
import { FormS } from "../../styles/components/Form";


export const FormLogin = () => {
  return (
    <FormS>
      <Title1>Login</Title1>
      <div className="InputBox">
        <LabelS htmlFor="">Email</LabelS>
        <InputS type="text" placeholder="Digite aqui seu email"/>
      </div>
      <div className="InputBox">
        <LabelS htmlFor="">Senha</LabelS>
        <InputS type="text" placeholder="Digite aqui sua senha"/>
      </div>
      <PrimaryButtonS>Entrar</PrimaryButtonS>
      <HeadlineBoldS>Ainda não possui uma conta?</HeadlineBoldS>
      <DisabledButtonS>Cadastre-se</DisabledButtonS>
    </FormS>
  );
};
