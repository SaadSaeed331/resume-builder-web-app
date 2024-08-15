import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderPage1 from './Pages/HeaderPage1'
import Experience from './Pages/Experience'
import Education from './Pages/Education'
import Skills from './Pages/Skills'
import Summary from './Pages/Summary'
import LastPage from './Pages/LastPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeaderPage1/>} />
        <Route path='/experience' element={<Experience/>}/>
        <Route path='education'element={<Education/>}/>
        <Route path='skill' element={<Skills/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/final' element={<LastPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App