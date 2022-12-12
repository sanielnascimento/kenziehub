import React, { useContext } from "react";
import logo from "../../Logo.png";
import { FormLogin } from "../../components/FormLogin";
import { ContainerS } from "../../styles/components/Container";
import { HeaderS } from "../../styles/components/Header";
import { LoginS } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../contexts/UserContext";

export const LoginPage = () => {
  const { loading } = useContext(UserContext);

  loading &&
    toast.info("🦄 Carregando!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

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
        <FormLogin />
      </ContainerS>
    </LoginS>
  );
};
