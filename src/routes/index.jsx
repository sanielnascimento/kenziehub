import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/notFound";
import { RegisterPage } from "../pages/Register";

export const RoutesMain = ({user, setUser}) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="home/" element={<HomePage user={user} setUser={setUser} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
