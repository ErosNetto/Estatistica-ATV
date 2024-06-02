// Icons
import { BsXCircleFill } from "react-icons/bs";

// Hooks
import { useState } from "react";

const Mediana = () => {
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

  // Função para calcular a mediana
  const calcularMediana = () => {
    const valoresValidos = valores.filter((item) => item.valor !== "");
    const valoresNumericos = valoresValidos.map((item) =>
      parseFloat(item.valor)
    );

    if (valoresNumericos.length === 0) {
      alert("Adicione pelo menos um valor para calcular a mediana.");
      return;
    }

    // Ordenar os valores
    valoresNumericos.sort((a, b) => a - b);

    // Verificar se o número de elementos é par ou ímpar
    const meio = Math.floor(valoresNumericos.length / 2);

    let mediana;

    if (valoresNumericos.length % 2 === 0) {
      // Se for par, mediana é a média dos dois valores do meio
      mediana = (valoresNumericos[meio - 1] + valoresNumericos[meio]) / 2;
    } else {
      // Se for ímpar, mediana é o valor do meio
      mediana = valoresNumericos[meio];
    }

    alert(`A mediana é: ${mediana.toFixed(2)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularMediana();
  };

  return (
    <div id="formCalc">
      <h1>Média Aritmética</h1>
      <h3>
        Para realizar o cálculo de média aritmética, basta adicionar os valores
        nos campos abaixo e apertar no botão de calcular
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
          type="button"
          value="Adicionar mais um campo"
          onClick={adicionarCampo}
        />
        <input type="submit" value="Calcular" />
      </form>
    </div>
  );
};

export default Mediana;
