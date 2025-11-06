// import layout
import DefLayout from "./layout/DefLayout"

// import delle pages
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import ErrorNotFound from "./pages/ErrorNotFound"

// import degli elementi React di gestione router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalProvider } from "./contexts/ContextGlobal"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefLayout />}>
              <Route index element={<HomePage />} />
              <Route path='/movies/:id' element={<MoviePage />} />
              <Route path='*' element={<ErrorNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App