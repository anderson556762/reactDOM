import React, { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (name) {
      setShowMessage(true);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Portão das Sombras</h1>
      <div className="input-container">
        <p className="input-text">Quem ousa entrar? Declare seu nome:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          className="input-field"
        />
        <button onClick={handleClick} className="input-button">Entrar</button>
      </div>
      {showMessage && (
        <div className="message-container">
          <p className="welcome-message">
            Bem-vindo, {name}. A escuridão te aguarda...
          </p>
        </div>
      )}
    </div>
  );
}

export default App;