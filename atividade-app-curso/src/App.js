import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

let InitialState = [
  {
    id: 1,
    titulo: "minha primeira",
    prioridade: "1",
    desc: "primeira atividade",
  },
  {
    id: 2,
    titulo: "minha segunda",
    prioridade: "2",
    desc: "segunda atividade",
  },
  {
    id: 3,
    titulo: "minha terceira",
    prioridade: "3",
    desc: "terceira atividade",
  },
];

function App() {
  const [atividades, setAtividades] = useState(InitialState);
  const [atividade, setAtividade] = useState({id:0});
  const [index, setIndex] = useState(0);

  useEffect(() => {
   atividades.length <= 0 ? setIndex(1) :
   setIndex(Math.max.apply(Math,atividades.map((item) => item.id )) + 1)
  }, [atividades]
 )

  function addAtividade(ativ) {
    setAtividades([...atividades, { ...ativ, id: index  }]);
  }
  function cancelarativ () {
    setAtividade({id:0});
  }
  function atualizarAtiv(ativ){
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
    setAtividade({id:0});
  }
  function deleteativ(id) {
    const atvfilter = atividades.filter((atividade) => atividade.id !== id);
    setAtividades([...atvfilter]);
  }
  function editativ(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
  }

  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        atividades={atividades}
        ativSelect={atividade}
        atualizarAtiv={atualizarAtiv}
        cancelarativ={cancelarativ}
      />
      <AtividadeLista
        deleteativ={deleteativ}
        atividades={atividades}
        editativ={editativ}
      />
    </>
  );
}

export default App;
