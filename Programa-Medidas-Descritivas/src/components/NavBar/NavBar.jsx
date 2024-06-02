import "./NavBar.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarUp">
        <NavLink to="/">
          <h1>Trabalho Programas Medidas Decritivas</h1>
        </NavLink>
      </div>
      <nav className="navBarDown">
        <ul className="navBarOptions">
          <li className="navBarOption">
            <NavLink to="/media-aritmetica">Média aritmética</NavLink>
          </li>
          <li className="navBarOption">
            <NavLink to="/mediana">Mediana</NavLink>
          </li>
          <li className="navBarOption">
            <NavLink to="/variancia-amostral">Variância amostral</NavLink>
          </li>
          <li className="navBarOption">
            <NavLink to="/desvio-padrao">Desvio padrão</NavLink>
          </li>
          <li className="navBarOption">
            <NavLink to="/coeficiente-de-variacao">
              Coeficiente de variação
            </NavLink>
          </li>
          <li className="navBarOption">
            <NavLink to="/homogeneo-ou-heterogeneo">
              Homogêneo ou heterogêneo
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
