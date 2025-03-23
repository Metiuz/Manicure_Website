function FormConsulta(){
    return(
        <div className="container w-50 rounded p-0 text-center" style={{backgroundColor: "#2d2f47"}}>
            <p className="rounded-top text-center" style={{backgroundColor: "purple"}}>Digite seu número para Consultar</p>
            <form action="" method="post" className="text-center m-auto">
                <input className="form-control w-50 text-center m-auto mt-4" placeholder="Exemplo: 21912345678" type="number"/>
                <br />
                <button className="btn btn-primary mb-2" type="submit">Consultar</button>
            </form>
        </div>
    )
}

export default FormConsulta