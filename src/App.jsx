import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/login/Login.jsx";
import Reembolso from "./components/reembolso/Reembolso.jsx";
import Solicitacoes from "./components/solicitacoes/Solicitacoes.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reembolso" element={<Reembolso />} />
        <Route path="/solicitacoes" element={<Solicitacoes />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
