import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Agendamento(){
    const Hoje = new Date();
    let mes = Hoje.getMonth()
    let dia = Hoje.getDate()
    if(mes>=0 && mes<=8){mes = `0${mes+1}`} else{mes +=1}
    if(dia>=0 && dia<=8){dia = `0${dia}`} else{dia}
    let hojeFormated = `${Hoje.getFullYear()}-${mes}-${dia}`

    const [formData, setFormData] = useState({
        date: hojeFormated,
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/agendar', { state: formData });
    };

    return(
        <div className="mg-30">
            <p id="pagenda">Selecione uma data e continue</p>
            <form onSubmit={ handleSubmit }>
                <input type="date" name="date" id="datapick" className="form-control w-25 m-auto" defaultValue={hojeFormated} onChange={ handleChange }/><br/>
                <button type="submit" className="btn btn-primary">Avançar</button>
            </form>
        </div>
    )
}

export default Agendamento