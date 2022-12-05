import React from "react";
import logo from "../../Logo.png";
import { useNavigate } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister";
import { RegisterS } from "./style";
import { ContainerS } from "../../styles/components/Container";
import { HeaderS } from "../../styles/components/Header";



export const RegisterPage = () => {
  const navigate = useNavigate();

  const registerSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const back = () => navigate(-1);
  const toLogin = () => navigate("/login");

  return (
    <RegisterS>
      <HeaderS>
        <ContainerS>
          <div className="RegisterHeader">
            <img src={logo} alt="Kenziehub" />
          </div>
        </ContainerS>
      </HeaderS>
      <ContainerS>
        <FormRegister />
      </ContainerS>
    </RegisterS>
  );
}
