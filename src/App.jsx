import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Reembolso from "./components/reembolso/Reembolso.jsx";
import Solicitacao from "./components/solicitacao/Solicitacao.jsx";
import Analise from "./components/analise/Analise.jsx";
import Historico from "./components/historico/Historico.jsx";
import Cadastro from "./components/cadastro/cadastro.jsx";
import Modal from "./components/modal/Modal.jsx";
import "./global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reembolso" element={<Reembolso />} />
        <Route path="/solicitacao" element={<Solicitacao />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
