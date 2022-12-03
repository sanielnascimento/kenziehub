import React from "react";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const registerSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="container">
      <form onSubmit={registerSubmit}>
        <input type="text" placeholder="" required name="" />
        <input type="email" placeholder="" required name="" />
        <input type="password" placeholder="" required name="" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};
