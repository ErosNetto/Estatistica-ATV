import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarUp">
        <h1>Trabalho Programas Medidas Decritivas</h1>
      </div>
      <nav className="navBarDown">
        <ul className="navBarOptions">
          <li className="navBarOption">
            <a href="">Média aritmética</a>
          </li>
          <li className="navBarOption">
            <a href="">Mediana</a>
          </li>
          <li className="navBarOption">
            <a href="">Variância amostral</a>
          </li>
          <li className="navBarOption">
            <a href="">Desvio padrão</a>
          </li>
          <li className="navBarOption">
            <a href="">Coeficiente de variação</a>
          </li>
          <li className="navBarOption">
            <a href="">Homogêneo ou heterogêneo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
