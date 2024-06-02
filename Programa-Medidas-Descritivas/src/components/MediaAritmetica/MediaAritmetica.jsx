import "./MediaAritmetica.css";

// Icons
import { BsPlusCircleFill, BsXCircleFill } from "react-icons/bs";

// Hooks
import { useState } from "react";

const MediaAritmetica = () => {
  const [numbers, setNumbers] = useState([]);

  return (
    <div className="mediaAritmedica">
      <h2>Cálculo da média aritmética</h2>
      <p>
        Para realizar o calculo de média aritmética, basta adicionar os valores
        e apertar no botão de calcular
      </p>

      <form>
        <div className="boxInput">
          <div className="icons">
            <BsPlusCircleFill />
            <BsXCircleFill />
          </div>
          <label>
            <span>Valor:</span>
            <input
              type="text"
              placeholder="E-mail"
              // onChange={(e) => setEmail(e.target.value)}
              // value={email || ""}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default MediaAritmetica;
