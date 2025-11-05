// import di router-dom per link
import { NavLink } from "react-router-dom"

function MyHeader() {


    return (
        <>
            <header className="navbar bg-black fw-bold">
                <nav className="container-fluid justify-content-center">
                    <NavLink className="navbar-brand fs-1 text-warning" to="/">Movie List</NavLink>
                </nav>
            </header>
        </>
    )
}

export default MyHeader