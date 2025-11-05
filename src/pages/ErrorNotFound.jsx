// import di router-dom per link
import { Link } from "react-router-dom"

const ErrorNotFound = () => {
    return (
        <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-white fs-1">Pagina non trovata</h2>
            <p className="my-3 text-white fs-3">Ci dispiace, ma la pagina che stai cercando non esiste</p>
            <Link className="btn btn-warning fs-4" to="/">Torna alla Home</Link>
        </div>
    )
}

export default ErrorNotFound