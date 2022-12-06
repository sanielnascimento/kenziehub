import React, { useState } from "react";
import logo from "../../Logo.png";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";
import { ContainerS } from "../../styles/components/Container";
import { HeaderS } from "../../styles/components/Header";
import { LoginS } from "./style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = ({ setUser }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  loading && (
    toast.info('🦄 Carregando!', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      }));

  const toRegister = () => navigate("/register");

  return (
    <LoginS>
      <ToastContainer />
      <HeaderS>
        <ContainerS>
          <figure className="LoginHeader">
            <img src={logo} alt="Kenziehub" />
          </figure>
        </ContainerS>
      </HeaderS>
      <ContainerS>
        <FormLogin
          toRegister={toRegister}
          setUser={setUser}
          setLoading={setLoading}
        />
      </ContainerS>
    </LoginS>
  );
};
