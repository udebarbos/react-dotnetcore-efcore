import React from "react";
import {
  FaRegMeh,
  FaPenAlt,
  FaTrash
} from "react-icons/fa";

function Atividades(props) {
  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Média";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }

  function prioridadeStyle(param) {
    switch (param) {
      case "1":
        return "success";
      case "2":
        return "warning";
      case "3":
        return "danger";
      default:
        return " ";
    }
  }
  return (
    <div>
      <div
        key={props.ativ.id}
        className={
          "card mb-2 shadow-sm border-" + prioridadeStyle(props.ativ.prioridade)
        }
      >
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">
              <span className="badge text-bg-primary">{props.ativ.id}</span> -
              {props.ativ.titulo}
            </h5>
            <h6 className="card-title">
              <span
                className={"ms1 text-" + prioridadeStyle(props.ativ.prioridade)}
              >
                <FaRegMeh className="mb-1 me-1" />
                {prioridadeLabel(props.ativ.prioridade)}
              </span>
            </h6>
          </div>
          <p className="card-text">{props.ativ.desc}</p>
          <div className="d-flex justify-content-end pt-2 m-0 border-top">
            <button
              className="btn btn-outline-primary me-2 btn-sm"
              onClick={() => props.editativ(props.ativ.id)}
            >
              <FaPenAlt className="me-2 mb-1" />
              Editar
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => props.deleteativ(props.ativ.id)}
            >
              <FaTrash className="me-2 mb-1" />
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Atividades;
