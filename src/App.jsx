//import { useState } from 'react'
//import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Components/Home';
import Login from './Components/Login';
import Clientes from './Components/Clientes';
import Productos from './Components/Productos';
import Proveedores from './Components/Proveedores'; 
import Nav from './Components/Navbar';
import Registrar from './Components/Register';
function App() {
  return (
    <>
        <Nav/> 
     <Container>
     <Row className="justify-content-md-center p-5"> 
     <Col >
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/clientes' element={<Clientes/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/proveedores' element={<Proveedores/>}/>
          <Route path='/registrar' element={<Registrar/>}/>
          <Route path='*' element={<Navigate to="/"/>}/>
       </Routes>
     </Col>
     </Row>
     </Container>
      
    </>
  )
}

export default App
