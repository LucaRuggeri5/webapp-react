// import comp movie card
import CardMovie from "../components/CardMovie"

// import axios
import axios from "axios"

// import state e effetc
import { useState, useEffect } from "react"


//pagina home
const HomePage = () => {

    //variabile di stato
    const [movies, setMovies] = useState([]);

    //chiamata axios
    const fecthMovies = () => {
        axios.get('http://localhost:3000/movies')
            .then(response => { setMovies(response.data) })
            .catch(error => { console.log(error) })
    }

    // faccio partire la chiamata a primo montaggio comp
    useEffect(fecthMovies, []);

    // funzione map per film
    const moviesRender = () => {
        return movies.map(movie => {
            return (
                <div key={movie.id}>
                    <CardMovie MovieProp={movie} />
                </div>
            )
        })
    }

    return (
        <>
            <div className="container">
                <h1 className="text-warning pt-5">Movies</h1>
                <h2 className="text-white pt-2"><i>Best Movies ever</i></h2>
                <div className="d-flex flex-wrap mt-4 gap-3 pb-5">
                    {moviesRender()}
                </div>
            </div>
        </>

    )
}

export default HomePage