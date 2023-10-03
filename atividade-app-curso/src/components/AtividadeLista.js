import Atividades from "./Atividades";

function AtividadeLista(props) {
  return (
    <div className="mt-3">
      {props.atividades.map((ativ) => (
        <Atividades
          key={ativ.id}
          ativ={ativ}
          deleteativ={props.deleteativ}
          editativ={props.editativ}
        />
      ))}
    </div>
  );
}
export default AtividadeLista;
