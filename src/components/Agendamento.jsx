function Agendamento(){
    const Hoje = new Date();
    let mes = Hoje.getMonth()
    if(mes>=0 && mes<=8){mes = `0${mes+1}`} else{mes +=1}
    let hojeFormated = `${Hoje.getFullYear()}-${mes}-${Hoje.getDate()}`
    console.log(hojeFormated);
    return(
        <div id="agendamento" style={{boxShadow:"0px 3px 5px 0px rgba(0, 0, 0, 0.125)"}}>
            <p id="pagenda">Selecione uma data e continue</p>
            <input type="date" name="data" id="datapick" defaultValue={hojeFormated}/> <br />
            <button id="bttava">Avançar</button>
        </div>
    )
}

export default Agendamento