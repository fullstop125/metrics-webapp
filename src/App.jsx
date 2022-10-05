import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import DetailsPage from './pages/DetailsPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/details/:smbl' element={<DetailsPage/>}/>


    </Routes>

    </>
  )
}

export default App