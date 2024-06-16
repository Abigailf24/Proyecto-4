import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'

import './App.css'
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Producto from './pages/Producto';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos' element={<Producto/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
