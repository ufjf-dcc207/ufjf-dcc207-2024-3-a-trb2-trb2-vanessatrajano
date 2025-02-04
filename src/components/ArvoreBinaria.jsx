import { useState } from "react";
import "./ArvoreBinaria.css";
import No from "./No";

function ArvoreBinaria() {
  const [arvore, setArvore] = useState({
    valor: 10,
    esquerda: { valor: 5, esquerda: null, direita: null },
    direita: { valor: 15, esquerda: null, direita: null },
  });
  const [valor, setValor] = useState();

  return (
    <div>
      <h1>Árvore Binária</h1>
      <div>
        <input type="number" placeholder="valor" value={valor} onChange={(e) => setValorInserir(e.target.value)}/>
        <button>Inserir</button>
        <button>Remover</button>
      </div>
      <div>
        <No no={arvore}/>
      </div>
    </div>
  );
}

export default ArvoreBinaria;
