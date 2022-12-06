import { useState } from "react";
import { RoutesMain as Routes } from "./routes";


export function App() {
  const [user, setUser] = useState();
  return (
    <Routes user={user} setUser={setUser}/>
  );
}

