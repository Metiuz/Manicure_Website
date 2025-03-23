import { useLocation } from "react-router-dom"
import VoltarBtt from "../components/VoltarBtt";
import TabelaAgenda from "../components/TabelaAgenda";

function Agendar(){
    const location = useLocation();
    const {date} = location.state || {};

    return(
        <div>
            <h1 className="display-1 text-center">Agenda</h1>
            {date && <p className="text-center">Data selecionada: {date}</p>}
            <TabelaAgenda/>
            <VoltarBtt/>
        </div>
    )
}

export default Agendar