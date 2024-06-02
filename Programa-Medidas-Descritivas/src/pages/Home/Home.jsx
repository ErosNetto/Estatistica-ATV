// Hooks
import { useState } from "react";

// Icons
import { BsXCircleFill } from "react-icons/bs";

const Home = () => {
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

  // Função para calcular a média aritmética
  const calcularMedia = () => {
    const valoresValidos = valores.filter((item) => item.valor !== "");
    const valoresNumericos = valoresValidos.map((item) =>
      parseFloat(item.valor)
    );

    if (valoresNumericos.length === 0) {
      alert("Adicione pelo menos um valor para calcular a média.");
      return undefined;
    }

    const soma = valoresNumericos.reduce((acc, valor) => acc + valor, 0);
    const media = soma / valoresNumericos.length;
    return media;
  };

  // Função para calcular a mediana
  const calcularMediana = () => {
    const valoresValidos = valores.filter((item) => item.valor !== "");
    const valoresNumericos = valoresValidos.map((item) =>
      parseFloat(item.valor)
    );

    if (valoresNumericos.length === 0) {
      alert("Adicione pelo menos um valor para calcular a mediana.");
      return undefined;
    }

    // Ordenar os valores
    valoresNumericos.sort((a, b) => a - b);

    // Verificar se o número de elementos é par ou ímpar
    const meio = Math.floor(valoresNumericos.length / 2);

    if (valoresNumericos.length % 2 === 0) {
      // Se for par, mediana é a média dos dois valores do meio
      return (valoresNumericos[meio - 1] + valoresNumericos[meio]) / 2;
    } else {
      // Se for ímpar, mediana é o valor do meio
      return valoresNumericos[meio];
    }
  };

  // Função para calcular a variância amostral
  const calcularVariancia = () => {
    const valoresValidos = valores.filter((item) => item.valor !== "");
    const valoresNumericos = valoresValidos.map((item) =>
      parseFloat(item.valor)
    );

    if (valoresNumericos.length <= 1) {
      alert(
        "Adicione pelo menos dois valores para calcular a variância amostral."
      );
      return undefined;
    }

    const media = calcularMedia();
    const somaDiferencasAoQuadrado = valoresNumericos.reduce((acc, valor) => {
      const diferenca = valor - media;
      return acc + diferenca * diferenca;
    }, 0);

    const variancia = somaDiferencasAoQuadrado / (valoresNumericos.length - 1);
    return variancia;
  };

  // Função para calcular o desvio padrão
  const calcularDesvioPadrao = () => {
    const variancia = calcularVariancia();
    const desvioPadrao = Math.sqrt(variancia);
    return desvioPadrao;
  };

  // Função para calcular o coeficiente de variação (CV%)
  const calcularCoeficienteVariacao = () => {
    const media = calcularMedia();
    const desvioPadrao = calcularDesvioPadrao();

    if (media === undefined || desvioPadrao === undefined) {
      alert(
        "Não é possível calcular o coeficiente de variação. Verifique os valores inseridos."
      );
      return undefined;
    }

    const coeficienteVariacao = (desvioPadrao / media) * 100;
    return coeficienteVariacao;
  };

  // Função para determinar se os dados são homogêneos ou heterogêneos
  const determinarHomogeneidade = () => {
    const coeficienteVariacao = calcularCoeficienteVariacao();

    if (coeficienteVariacao !== undefined) {
      if (coeficienteVariacao <= 30) {
        return "Os dados são homogêneos.";
      } else {
        return "Os dados são heterogêneos.";
      }
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e, type) => {
    e.preventDefault();

    const valoresValidos = valores.filter((item) => item.valor !== "");
    const valoresNumericos = valoresValidos.map((item) =>
      parseFloat(item.valor)
    );

    if (type === 1) {
      const media = calcularMedia();
      if (media !== undefined) {
        alert(`A média aritmética é: ${media.toFixed(2)}`);
      }
    } else if (type === 2) {
      const mediana = calcularMediana();
      if (mediana !== undefined) {
        alert(`A mediana é: ${mediana.toFixed(2)}`);
      }
    } else if (type === 3) {
      const variancia = calcularVariancia();
      if (variancia !== undefined) {
        alert(`A variância amostral é: ${variancia.toFixed(2)}`);
      }
    } else if (type === 4) {
      if (valoresNumericos.length <= 1) {
        return alert(
          "Adicione pelo menos dois valores para calcular o desvio padrão."
        );
      }
      const desvioPadrao = calcularDesvioPadrao();
      if (desvioPadrao !== undefined) {
        alert(`O desvio padrão é: ${desvioPadrao.toFixed(2)}`);
      }
    } else if (type === 5) {
      if (valoresNumericos.length <= 1) {
        return alert(
          "Adicione pelo menos dois valores para calcular o coeficiente de variação."
        );
      }
      const coeficienteVariacao = calcularCoeficienteVariacao();
      if (coeficienteVariacao !== undefined) {
        alert(
          `O coeficiente de variação é: ${coeficienteVariacao.toFixed(2)}%`
        );
      }
    } else if (type === 6) {
      if (valoresNumericos.length <= 1) {
        return alert(
          "Adicione pelo menos dois valores para determinar se os dados são homogêneos ou heterogêneos."
        );
      }
      const homogeneoHeterogeneo = determinarHomogeneidade();
      if (homogeneoHeterogeneo !== undefined) {
        alert(homogeneoHeterogeneo);
      }
    } else {
      alert("Ocorreu um erro!");
    }
  };

  return (
    <div id="formCalc">
      <h1>Medidas Descritivas</h1>
      <h3>
        Para realizar o cálculo, basta adicionar os valores nos campos abaixo e
        clicar no botão de calcular.
      </h3>

      <form>
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

        <input
          type="submit"
          value="Média aritmética"
          onClick={(e) => handleSubmit(e, 1)}
        />
        <input
          type="submit"
          value="Mediana"
          onClick={(e) => handleSubmit(e, 2)}
        />
        <input
          type="submit"
          value="Variância amostral"
          onClick={(e) => handleSubmit(e, 3)}
        />
        <input
          type="submit"
          value="Desvio padrão"
          onClick={(e) => handleSubmit(e, 4)}
        />
        <input
          type="submit"
          value="Coeficiente de variação"
          onClick={(e) => handleSubmit(e, 5)}
        />
        <input
          type="submit"
          value="Homogêneo ou heterogêneo"
          onClick={(e) => handleSubmit(e, 6)}
        />
      </form>
    </div>
  );
};

export default Home;
