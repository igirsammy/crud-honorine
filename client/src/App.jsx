import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Component/Create';
import Read from './Component/Read';
import Edit from './Component/Edit';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/Create' element={<Create/>}/>
      <Route  path='/Read/:id' element={<Read/>}/>
      <Route  path='/Edit/:id' element={<Edit/>}/>


    </Routes>
    </BrowserRouter>
  )
}
