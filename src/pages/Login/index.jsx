import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const loginSubmit = e => {
    e.preventDefault();
    navigate("/")
  }

  return (
    <div className="container">
      <form onSubmit={loginSubmit}>
        <input type="email" placeholder="" required name="" />
        <input type="password" placeholder="" required name="" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
