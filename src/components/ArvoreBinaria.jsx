import { useState } from "react";
import "./ArvoreBinaria.css";
import No from "./No";

function ArvoreBinaria() {
  const [arvore, setArvore] = useState({
    valor: 10,
    esquerda: null,
    direita: null,
  });
  const [valor, setValor] = useState();

  return (
    <div>
      <h1>Árvore Binária</h1>
      <div>
        <input type="number" placeholder="valor" value={valor} />
        <button>Inserir</button>
        <button>Remover</button>
      </div>
      <div>
        <No />
      </div>
    </div>
  );
}

export default ArvoreBinaria;
