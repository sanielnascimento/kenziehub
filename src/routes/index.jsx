import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LandingPage } from "../pages/Landing";
import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/notFound";
import { RegisterPage } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="home/:name" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
