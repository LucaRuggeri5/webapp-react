// import di router-dom per link
import { Link } from "react-router-dom"

const CardMovie = ({ MovieProp }) => {

    // destrutturazione
    const { id, title, release_year, image, genre } = MovieProp;

    return (

        <div className="card mb-1 p-0">
            <img src={image} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{release_year}</p>
                <p>{genre}</p>
                <Link to={`movies/${id}`} className="btn btn-warning">
                    Dettagli
                </Link>
            </div>
        </div>

    )
}

export default CardMovie