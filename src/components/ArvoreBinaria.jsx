import { useState } from "react";
import "./ArvoreBinaria.css";
import No from "./No";

function inserirNo(no, valor) {
  if (no === null) {
    return { valor, esquerda: null, direita: null };
  }
  if (valor < no.valor) {
    return { ...no, esquerda: inserirNo(no.esquerda, valor) };
  } else if (valor > no.valor) {
    return { ...no, direita: inserirNo(no.direita, valor) };
  }
  return no;
}

function ArvoreBinaria() {
  const [arvore, setArvore] = useState({
    valor: 20,
    esquerda: { valor: 5, esquerda: null, direita: null },
    direita: { valor: 30, esquerda: null, direita: null },
  });
  const [valor, setValor] = useState();

  const manipularInsercao = () => {
    setArvore(inserirNo(arvore, valor));
    setValor("");
  };

  return (
    <div>
      <h1>Árvore Binária</h1>
      <div>
        <input
          type="number"
          placeholder="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button onClick={manipularInsercao}>Inserir</button>
        <button>Remover</button>
      </div>
      <div>
        <No no={arvore} />
      </div>
    </div>
  );
}

export default ArvoreBinaria;
