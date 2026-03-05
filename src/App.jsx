import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'


function App() {
  return (
    <>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Experience' element={<Experience/>}/>
       <Route path='/Contact' element={<Contact/>}/>

    </Routes>
    </>
  )
}

export default App