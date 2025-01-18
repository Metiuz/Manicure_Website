function Agendamento(){
    const Hoje = new Date();
    let mes = Hoje.getMonth()
    if(mes>=0 && mes<=8){mes = `0${mes+1}`} else{mes +=1}
    let hojeFormated = `${Hoje.getFullYear()}-${mes}-${Hoje.getDate()}`
    console.log(hojeFormated);
    return(
        <div className="mg-30">
            <p id="pagenda">Selecione uma data e continue</p>
            <input type="date" name="data" id="datapick" defaultValue={hojeFormated}/> <br />
            <button type="button" className="btn btn-primary">Avançar</button>
        </div>
    )
}

export default Agendamento