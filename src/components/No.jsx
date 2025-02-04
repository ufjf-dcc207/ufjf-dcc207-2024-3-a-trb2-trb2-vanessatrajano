import "./No.css";

function No({ no }) {
  return (
    <div className="no-container">
      <span>{no.valor}</span>
      <div className="filhos-container">
        <div>
          {no.esquerda && (
            <div className="valor-container">
              <span>Esquerda: </span>
              <No no={no.esquerda} />
            </div>
          )}
        </div>
        <div>
          {no.direita && (
            <div className="valor-container">
              <span>Direita: </span>
              <No no={no.direita} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default No;
