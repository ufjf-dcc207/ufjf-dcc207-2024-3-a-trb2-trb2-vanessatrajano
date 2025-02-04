import "./No.css";

function No({no}) {
  return (
    <div>
      <span>{no.valor}</span>
      <div>
      <div>
          {no.esquerda && (
            <div>
              <span>Esquerda: </span>
              <No no={no.esquerda} />
            </div>
          )}
        </div>
        <div>
          {no.direita && (
            <div>
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
