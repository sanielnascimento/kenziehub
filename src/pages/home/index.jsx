import logo from "../../Logo.png";
import { HomeS } from "./syle";
import { HeaderS } from "../../styles/components/Header";
import { HeaderButtonS } from "../../styles/components/HeaderButton";
import { Title1 } from "../../styles/components/Title1";
import { HomeContainerS } from "../../styles/components/HomeContainer";
import { useNavigate } from "react-router-dom";

export const HomePage = ({ user, setUser }) => {
  const navigate = useNavigate();
  const { name, course_module } = user;

  const loggout = () => {
    navigate("/");
    setUser({});
    localStorage.clear();
  };

  return (
    <HomeS>
      <HeaderS>
        <HomeContainerS>
          <div className="HomeHeader">
            <img src={logo} alt="Kenzie hub" />
            <HeaderButtonS onClick={loggout}>Sair</HeaderButtonS>
          </div>
        </HomeContainerS>
      </HeaderS>
      <div className="UserInfoBox">
        <HomeContainerS>
          <div className="UserInfo">
            <Title1>Olá, {name}</Title1>
            <span>{course_module}</span>
          </div>
        </HomeContainerS>
      </div>
      <div className="MainContent">
        <HomeContainerS>
          <div className="AppStatus">
            <Title1>Que pena! Estamos em desenvolvimento :(</Title1>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </HomeContainerS>
      </div>
    </HomeS>
  );
};
