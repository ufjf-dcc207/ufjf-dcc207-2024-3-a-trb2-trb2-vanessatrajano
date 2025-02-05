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

function removerNo(no, valor) {
  if (no === null) {
    return null;
  }
  if (valor < no.valor) {
    return { ...no, esquerda: removerNo(no.esquerda, valor) };
  } else if (valor > no.valor) {
    return { ...no, direita: removerNo(no.direita, valor) };
  } else {
    if (no.esquerda === null && no.direita === null) {
      return null;
    }
    if (no.esquerda === null) {
      return no.direita;
    }
    if (no.direita === null) {
      return no.esquerda;
    }

    let sucessor = no.direita;
    while (sucessor.esquerda !== null) {
      sucessor = sucessor.esquerda;
    }
    return {
      valor: sucessor.valor,
      esquerda: no.esquerda,
      direita: removerNo(no.direita, sucessor.valor),
    };
  }
}

function ArvoreBinaria() {
  const [arvore, setArvore] = useState({
    valor: 20,
    esquerda: { valor: 5, esquerda: null, direita: null },
    direita: { valor: 30, esquerda: null, direita: null },
  });
  const [valor, setValor] = useState("");

  const manipularInsercao = () => {
    if(valor != ""){
      const valorNumerico = parseInt(valor, 10);
      setArvore(inserirNo(arvore, valorNumerico));
      setValor("");
    }
  };

  const manipularRemocao = () => {
    const valorNumerico = parseInt(valor, 10);
    setArvore(removerNo(arvore, valorNumerico));
    setValor("");
  };

  return (
    <div className="arvore-container">
      <h1>Árvore Binária</h1>
      <div className="input-container">
        <input
          type="number"
          placeholder="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <div>
          <button onClick={manipularInsercao}>Inserir</button>
          <button onClick={manipularRemocao}>Remover</button>
        </div>
      </div>
      <div>
        <No no={arvore} />
      </div>
    </div>
  );
}

export default ArvoreBinaria;
