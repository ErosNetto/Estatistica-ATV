// Icons
import { BsXCircleFill } from "react-icons/bs";

// Hooks
import { useState } from "react";

const VarianciaAmostral = () => {
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

  // Função para calcular a variância amostral
  const calcularVariancia = () => {
    const valoresValidos = valores.filter((item) => item.valor !== "");
    const valoresNumericos = valoresValidos.map((item) =>
      parseFloat(item.valor)
    );

    if (valoresNumericos.length === 0) {
      alert("Adicione pelo menos um valor para calcular a variância amostral.");
      return;
    }

    const soma = valoresNumericos.reduce((acc, valor) => acc + valor, 0);
    const media = soma / valoresNumericos.length;

    const somaDiferencasAoQuadrado = valoresNumericos.reduce((acc, valor) => {
      const diferenca = valor - media;
      return acc + diferenca * diferenca;
    }, 0);

    const variancia = somaDiferencasAoQuadrado / (valoresNumericos.length - 1);
    alert(`A variância amostral é: ${variancia.toFixed(2)}`);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    calcularVariancia();
  };

  return (
    <div id="formCalc">
      <h1>Variância Amostral</h1>
      <h3>
        Para realizar o cálculo da variância amostral , basta adicionar os
        valores nos campos abaixo e apertar no botão de calcular
      </h3>

      <form onSubmit={handleSubmit}>
        {valores.map((item, index) => (
          <div id="inputBox" key={item.id}>
            <span>Valor {index + 1}:</span>
            <div id="boxInput">
              <input
                type="text"
                placeholder="Digite um valor"
                value={item.valor}
                onChange={(e) => handleChange(item.id, e.target.value)}
              />
              {valores.length > 2 && (
                <div id="icons">
                  <BsXCircleFill onClick={() => removerCampo(item.id)} />
                </div>
              )}
            </div>
          </div>
        ))}

        <input
          id="btnAdd"
          type="button"
          value="Adicionar mais um campo"
          onClick={adicionarCampo}
        />
        <input type="submit" value="Calcular" />
      </form>
    </div>
  );
};

export default VarianciaAmostral;
