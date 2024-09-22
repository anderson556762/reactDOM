import React from "react";
import './index';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Aqui esta minha pagina react</h1>
        <p>uma pagina moderna e interativa com react</p>
      </header>

      <section className="content-section">
        <div className="card">
          <h2>1</h2>
          <p>pagina bonita feito com gpt</p>
          <button className="btn-primary">Explore</button>
        </div>

        <div className="card">
          <h2>2</h2>
          <p>Bem vindo a minha pagina</p>
          <button className="btn-secondary">veja mais</button>
        </div>
      </section>

      <footer className="app-footer">
        <p>© 2024 App de Anderson JR</p>
      </footer>
    </div>
  );
}

export default App;