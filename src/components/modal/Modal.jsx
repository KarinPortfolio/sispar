import { useState } from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

function Modal({ isOpen, onClose, onContinueEdit, onCleanRequest }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <p>Deseja realmente limpar os campos preenchidos acima?</p>
        <div className="modal-buttons">
          <button
            type="button"
            className="continue-editing"
            onClick={onContinueEdit}
          >
            Continuar Editando
          </button>
          <button
            type="button"
            className="cancel-request"
            onClick={onCleanRequest}
          >
            Sim, limpar
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleContinueEdit = () => {
    alert("Ação: Continuar Editando");
    handleCloseModal();
    // Adicione aqui a lógica para continuar a edição
  };

  const handleCleanRequest = () => {
    alert("Ação: Sim, limpar");
    handleCloseModal();
    // Adicione aqui a lógica para cancelar a solicitação
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Limpar Solicitação</button>
      <Modal
        isOpen={isModalOpen}
        onCleanRequest={handleCleanRequest}
        onContinueEdit={handleContinueEdit}
        onCancelRequest={handleCleanRequest}
      />
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onContinueEdit: PropTypes.func.isRequired,
  onCleanRequest: PropTypes.func.isRequired,
};

export default App;
