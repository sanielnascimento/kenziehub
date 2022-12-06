import React from "react";
import logo from "../../Logo.png";
import { useNavigate } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister";
import { RegisterS } from "./style";
import { ContainerS } from "../../styles/components/Container";
import { HeaderS } from "../../styles/components/Header";
import {HeaderButtonS} from "../../styles/components/HeaderButton";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const back = () => navigate(-1);

  return (
    <RegisterS>
      <HeaderS>
        <ContainerS>
          <div className="RegisterHeader">
            <img src={logo} alt="Kenziehub" />
            <HeaderButtonS type="button" onClick={back} >Voltar</HeaderButtonS>            
          </div>
        </ContainerS>
      </HeaderS>
      <ContainerS>
        <FormRegister />
      </ContainerS>
    </RegisterS>
  );
}
