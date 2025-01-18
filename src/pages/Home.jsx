import Foto1 from '../components/Foto1'
import Agendamento from '../components/Agendamento'
import Instagram from '../components/Instagram'
import ConsultaAgenda from '../components/ConsultaAgenda'
import LinkZap from '../components/LinkZap'

function Home(){
    return(
        <div className='container text-center'>
            <h1 className='display-1'>Studio Marques</h1>
            <Foto1/>
            <h2 className='subtitle'>Faça sua Reserva</h2>
            <Agendamento/>
            <ConsultaAgenda/>
            <Instagram/>
            <LinkZap/>
        </div>
    )
}

export default Home