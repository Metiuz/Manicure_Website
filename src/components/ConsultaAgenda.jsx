function ConsultaAgenda(){
    return(
        <div style={{textAlign:"center", marginTop:"30px", display:"flex"}}>
            <a href="/meus-agendamentos" style={{width:"330px", height:"30px", margin:"auto", textAlign:"center", backgroundColor:"purple", borderRadius:"10px", paddingTop:"10px", color:"white", textDecoration:"none", boxShadow:"0px 3px 5px 0px rgba(0, 0, 0, 0.125)"}}>
                <img src="../src/assets/imgs/agenda20.png" alt="Calendário" style={{verticalAlign:"middle", marginRight:"5px"}}/>
                Consultar Agendamentos
            </a>
        </div>
    )
}

export default ConsultaAgenda