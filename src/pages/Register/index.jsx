import React, { useState } from "react";
import logo from "../../Logo.png";
import { useNavigate } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister";
import { RegisterS } from "./style";
import { ContainerS } from "../../styles/components/Container";
import { HeaderS } from "../../styles/components/Header";
import {HeaderButtonS} from "../../styles/components/HeaderButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

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

  const navigate = useNavigate();

  const back = () => navigate(-1);

  return (
    <RegisterS>
      <ToastContainer/>
      <HeaderS>
        <ContainerS>
          <div className="RegisterHeader">
            <img src={logo} alt="Kenziehub" />
            <HeaderButtonS type="button" onClick={back} >Voltar</HeaderButtonS>            
          </div>
        </ContainerS>
      </HeaderS>
      <ContainerS>
        <FormRegister setLoading={setLoading} />
      </ContainerS>
    </RegisterS>
  );
}
