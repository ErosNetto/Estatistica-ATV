import "./Variacao.css";

// Icons
import { BsXCircleFill } from "react-icons/bs";

// Hooks
import { useState } from "react";

const Variacao = () => {
  const [valores, setValores] = useState([
    { id: 1, valor: "" },
    { id: 2, valor: "" },
  ]);

  // Função para adicionar um novo campo
  const adicionarCampo = () => {
    const novoCampo = {
      id: valores.length + 1,
      valor: "",
    };
    setValores([...valores, novoCampo]);
  };

  // Função para remover um campo
  const removerCampo = (id) => {
    const novosValores = valores.filter((item) => item.id !== id);
    setValores(novosValores.map((item, index) => ({ ...item, id: index + 1 })));
  };

  // Função para lidar com a mudança de valor de um campo
  const handleChange = (id, valor) => {
    const novosValores = valores.map((item) =>
      item.id === id ? { ...item, valor: valor } : item
    );
    setValores(novosValores);
  };

  // Função para calcular o coeficiente de variação (CV%)
  const calcularCoeficienteVariacao = () => {
    const valoresValidos = valores.filter((item) => item.valor !== "");
    const valoresNumericos = valoresValidos.map((item) =>
      parseFloat(item.valor)
    );

    if (valoresNumericos.length <= 1) {
      alert("Adicione pelo menos dois valores para o coeficiente de variação.");
      return;
    }

    const soma = valoresNumericos.reduce((acc, valor) => acc + valor, 0);
    const media = soma / valoresNumericos.length;

    const somaDiferencasAoQuadrado = valoresNumericos.reduce((acc, valor) => {
      const diferenca = valor - media;
      return acc + diferenca * diferenca;
    }, 0);

    const variancia = somaDiferencasAoQuadrado / (valoresNumericos.length - 1);

    const desvioPadrao = Math.sqrt(variancia);

    if (media === undefined || desvioPadrao === undefined) {
      alert(
        "Não é possível calcular o coeficiente de variação. Verifique os valores inseridos."
      );
      return;
    }

    const coeficienteVariacao = (desvioPadrao / media) * 100;
    if (coeficienteVariacao !== undefined) {
      alert(`O coeficiente de variação é: ${coeficienteVariacao.toFixed(2)}%`);
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    calcularCoeficienteVariacao();
  };

  return (
    <div className="mediaAritmedica">
      <h1>Coeficiente de Variação</h1>
      <h3>
        Para realizar o cálculo do coeficiente de variação (em porcentagem),
        basta adicionar os valores nos campos abaixo e apertar no botão de
        calcular
      </h3>

      <form onSubmit={handleSubmit}>
        {valores.map((item, index) => (
          <div className="inputBox" key={item.id}>
            <span>Valor {index + 1}:</span>
            <div className="boxInput">
              <input
                type="text"
                placeholder="Digite um valor"
                value={item.valor}
                onChange={(e) => handleChange(item.id, e.target.value)}
              />
              {valores.length > 2 && (
                <div className="icons">
                  <BsXCircleFill onClick={() => removerCampo(item.id)} />
                </div>
              )}
            </div>
          </div>
        ))}

        <input
          type="button"
          value="Adicionar mais um campo"
          onClick={adicionarCampo}
        />
        <input type="submit" value="Calcular" />
      </form>
    </div>
  );
};

export default Variacao;
