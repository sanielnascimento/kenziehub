import React from "react";
import logo from "../../Logo.png";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";
import { ContainerS } from "../../styles/components/Container";
import { HeaderS } from "../../styles/components/Header";
import { LoginS } from "./style";

export const LoginPage = () => {
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    const name = "Saniel";
    e.preventDefault();
    navigate(`/home/${name}`);
  };

  const back = () => navigate(-1);
  const toRegister = () => navigate("/register");

  return (
    <LoginS>
      <HeaderS>
        <ContainerS>
          <figure className="LoginHeader">
            <img src={logo} alt="Kenziehub" />
          </figure>
        </ContainerS>
      </HeaderS>
      <ContainerS>
        <FormLogin toRegister={toRegister}/>
      </ContainerS>
    </LoginS>
  );
};
