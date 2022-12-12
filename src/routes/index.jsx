import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/notFound";
import { RegisterPage } from "../pages/Register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="register" element={<RegisterPage />} />
    <Route path="home/" element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
