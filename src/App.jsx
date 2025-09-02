import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Main from './pages/Main'
import Level from './pages/Level'
import Dimensions from './pages/Dimensions'
import Roles from './pages/Roles'
import Strategy from './pages/Strategy'
import People from './pages/People'
import Formalization from './pages/Formalization'
import Quality from './pages/Quality'
import Infrastructure from './pages/Infrastructure'
import Open from './pages/Open'
import Use from './pages/UseStrategy'

export default function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h1>Framework DG2M</h1>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="nav-links">
            <li><Link to="/">Sobre</Link></li>
            <li><Link to="/level">Níveis</Link></li>
            <li><Link to="/dimensions">Dimensões</Link></li>
            <li><Link to="/roles">Papéis</Link></li>
            <li><Link to="/use">Estratégia de Uso</Link></li>
            <li>
              <a 
                href="mailto:luisfilipe.tec@gmail.com"
                target="_blank" rel="noopener noreferrer"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/level" element={<Level />} />
        <Route path="/dimensions" element={<Dimensions />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/people" element={<People />} />
        <Route path="/formalization" element={<Formalization />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/open" element={<Open />} />
        <Route path="/use" element={<Use />} />
      </Routes>
      </main>

      <footer className="main-footer">
        <p className='footer-text'>
          O DG2M foi desenvolvido pelo Eng. Me. Luis Filipe Campos Cardoso, sob orientação da Profa. Dra. Edna Canedo, 
          como parte do Mestrado Profissional em Computação Aplicada da UnB.
        </p>
      </footer>
    </div>
  )
}