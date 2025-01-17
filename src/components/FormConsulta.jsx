function FormConsulta(){
    return(
        <div style={{textAlign:"center", marginTop:"30px", marginBottom:"30px", display:"block", width:"350px", height:"170px", margin:"auto", borderRadius:"20px", backgroundColor: "#2d2f47"}}>
            <p style={{paddingTop: "5px",paddingBottom: "5px",marginTop: "10px",backgroundColor: "purple", borderTopLeftRadius: "10px",borderTopRightRadius: "10px"}}>Digite seu número para Consultar</p>
            <form action="" method="post" style={{textAlign:"center", margin:"auto"}}>
                <input className="inputnum" placeholder="Exemplo: 21912345678" type="number" style={{width:"276px",height: "26px",border: "1px",padding: "6px 12px",borderRadius: "10px",margin: "auto",textAlign: "center",fontSize: "18px"}}/>
                <button type="submit" id="bttava">Consultar</button>
            </form>
        </div>
    )
}

export default FormConsulta