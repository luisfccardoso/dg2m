import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Main.css';

import Strategy from './Strategy';
import People from './People';
import Formalization from './Formalization';
import Quality from './Quality';
import Infrastructure from './Infrastructure';
import Open from './Open';

const Dimensions = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <header className="main-header">
        <h1>Dimensões do DG2M</h1>
        <p>
          Para avaliar os níveis de maturidade, foram desenvolvidas seis dimensões...
        </p>
      </header>

      <div className="dimensions-wrapper">
        {}
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Dimensões
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/dg2m/strategy">Estratégia e Governança de Dados</Link></li>
            <li><Link to="/dg2m/people">Equipes, Pessoas e Estrutura Organizacional</Link></li>
            <li><Link to="/dg2m/formalization">Formalização e Processos de Gestão de Dados</Link></li>
            <li><Link to="/dg2m/quality">Qualidade dos Dados</Link></li>
            <li><Link to="/dg2m/infrastructure">Infraestrutura de Dados</Link></li>
            <li><Link to="/dg2m/open">Dados Abertos</Link></li>
          </ul>
        </nav>

        <main className="dimension-content">
          <h2>Escolha uma das dimensões ao lado.</h2>
          <Routes>
            <Route path="/dg2m/strategy" element={<Strategy />} />
            <Route path="/dg2m/people" element={<People />} />
            <Route path="/dg2m/formalization" element={<Formalization />} />
            <Route path="/dg2m/quality" element={<Quality />} />
            <Route path="/dg2m/infrastructure" element={<Infrastructure />} />
            <Route path="/dg2m/open" element={<Open />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dimensions;
