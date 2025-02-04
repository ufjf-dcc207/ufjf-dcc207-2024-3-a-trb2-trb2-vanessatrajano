import "./ArvoreBinaria.css";
import No from "./No";

function ArvoreBinaria() {
  return (
    <div>
      <h1>Árvore Binária</h1>
      <div>
        <input type="number" placeholder="valor" />
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
