import VoltarBtt from "../components/VoltarBtt"
import FormConsulta from "../components/FormConsulta"

function MeusAgendamentos(){
    return(
        <div>
            <h1 className="display-1 m-auto my-3 text-center">Meus Agendamentos</h1>
            <FormConsulta/>
            <VoltarBtt/>
        </div>
    )
}

export default MeusAgendamentos