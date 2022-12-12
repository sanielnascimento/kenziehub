import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [homeLoading, setHomeLoading] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const loggout = () => {
    navigate("/");
    setUser(null);
    localStorage.clear();
  };

  const submitRegister = async (data) => {
    try {
      setLoading(true);
      // eslint-disable-next-line no-unused-vars
      const resp = await api.post("/users", data);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const submitLogin = async (data) => {
    try {
      setLoading(true);
      const resp = await api.post("/sessions", data);
      setUser(resp.data.user);
      localStorage.setItem("@TOKEN", resp.data.token);
      localStorage.setItem("@USERID", resp.data.user.id);
      navigate("/home");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");
      if (!token) {
        return loggout();
      }
      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.error(error);
        loggout();
      } finally {
        setHomeLoading(false);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        navigate,
        loggout,
        submitRegister,
        submitLogin,
        homeLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
