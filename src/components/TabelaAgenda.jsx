function TabelaAgenda(){
    const available_hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

    return(
        <div className="table-responsive w-75 m-auto">
            <table className="table table-striped table-dark table-bordered table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col" className="text-center">Horários</th>
                    </tr>
                </thead>
                <tbody>
                    {available_hours.map((hour, index) => (
                        <tr key={index} className="table-success text-center">
                            <td>{hour}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaAgenda