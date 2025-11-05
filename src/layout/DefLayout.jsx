// importo Outlet per gestione comp su rotte
import { Outlet } from "react-router-dom"

// importo comp Header
import MyHeader from "../components/MyHeader"


// creazione componente Layout
const DefLayout = () => {
    return (
        <>
            <MyHeader />
            <main className="bg-dark">
                <Outlet />
            </main>
        </>
    )
}

export default DefLayout