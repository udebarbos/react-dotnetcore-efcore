import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const atividadeInicial = {
  id: 0,
  titulo: "",
  prioridade: 0,
  desc: "",
}

function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual());
  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setAtividade({ ...atividade, [name]: value });
  };

  useEffect(() => {
    if (props.ativSelect.id !== 0) {
      setAtividade(props.ativSelect);
    }
  }, [props.ativSelect]);

  const handleCancelar = (e) => {
    e.preventDefault();

    props.cancelarativ();

    setAtividade(atividadeInicial);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.ativSelect.id !== 0) 
    props.atualizarAtiv(atividade);
    else 
    props.addAtividade(atividade);
    setAtividade(atividadeInicial);
  }

  function atividadeAtual() {
    if (props.ativSelect.id !== 0) {
      return props.ativSelect;
    } else {
      return atividadeInicial;
    }
  }
  return (
    <>
      <h1>Atividade {atividade.id !== 0 ? atividade.id : ""}</h1>
      <form className="row g-3 mt-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Titulo</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            onChange={inputTextHandler}
            value={atividade.titulo}
            placeholder="Titulo"
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
            id="prioridade"
            className="form-select"
            name="prioridade"
            onChange={inputTextHandler}
            value={atividade.prioridade}
          >
            <option selected value="0">
              Selecione...
            </option>
            <option value="1">Baixa</option>
            <option value="2">Média</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea
            id="desc"
            name="desc"
            onChange={inputTextHandler}
            value={atividade.desc}
            type="text"
            placeholder="descrição"
            className="form-control"
          />
        </div>
        <hr />
        <div className="col-12">
          {atividade.id === 0 ? (
            <button className="btn btn-outline-secondary" type="submit">
              adicionar
            </button>
          ) : (
            <>
              <button className="btn btn-outline-success" type="submit">
                Salvar
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={handleCancelar}
              >
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
export default AtividadeForm;
