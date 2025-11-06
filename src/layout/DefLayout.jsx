// importo Outlet per gestione comp su rotte
import { Outlet } from "react-router-dom"

// importo comp Header
import MyHeader from "../components/MyHeader"

//importo il comp loader
import Loader from "../components/Loader"

import { useGlobal } from "../contexts/ContextGlobal"

// creazione componente Layout
const DefLayout = () => {

    // etrapoliamo da context var di stato
    const { isLoading } = useGlobal();

    return (
        <>
            <MyHeader />
            <main className="bg-dark">
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
}

export default DefLayout