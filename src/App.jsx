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

export default function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h1>Framework DG2M</h1>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="nav-links">
            <li><Link to="/dg2m">Sobre</Link></li>
            <li><Link to="/dg2m/level">Níveis</Link></li>
            <li><Link to="/dg2m/dimensions">Dimensões</Link></li>
            <li><Link to="/dg2m/roles">Papéis</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/dg2m" element={<Main />} />
          <Route path="/dg2m/level" element={<Level />} />
          <Route path="/dg2m/dimensions" element={<Dimensions />} />
          <Route path="/dg2m/roles" element={<Roles />} />
          <Route path="/dg2m/strategy" element={<Strategy />} />
          <Route path="/dg2m/people" element={<People />} />
          <Route path="/dg2m/formalization" element={<Formalization />} />
          <Route path="/dg2m/quality" element={<Quality />} />
          <Route path="/dg2m/infrastructure" element={<Infrastructure />} />
          <Route path="/dg2m/open" element={<Open />} />
        </Routes>
      </main>

      <footer className="main-footer">
        &copy; 2025 DG2M. Todos os direitos reservados.
      </footer>
    </div>
  )
}