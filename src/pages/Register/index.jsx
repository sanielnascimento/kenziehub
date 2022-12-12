import logo from "../../Logo.png";
import { FormRegister } from "../../components/FormRegister";
import { RegisterS } from "./style";
import { ContainerS } from "../../styles/components/Container";
import { HeaderS } from "../../styles/components/Header";
import {HeaderButtonS} from "../../styles/components/HeaderButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export const RegisterPage = () => {
  const {loading, navigate} = useContext(UserContext);

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

  return (
    <RegisterS>
      <ToastContainer/>
      <HeaderS>
        <ContainerS>
          <div className="RegisterHeader">
            <img src={logo} alt="Kenziehub" />
            <HeaderButtonS type="button" onClick={() => navigate(-1)} >Voltar</HeaderButtonS>            
          </div>
        </ContainerS>
      </HeaderS>
      <ContainerS>
        <FormRegister />
      </ContainerS>
    </RegisterS>
  );
}
