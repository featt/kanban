import { Container } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main'
import PrivatRoute from './components/PrivatRoute'
import Register from './components/Register'


function App() {
  return (
    <Container display='flex' minW='100%' h='100vh' bg='#191A23' px='0'> 
    
      <Routes>            
        <Route element={<PrivatRoute/>}>
          <Route path='/' element={<Main/>} exact /> 
        </Route> 
        <Route path='/register' element={<Register/>} />      
        <Route path='/login' element={<Login/>} />              
      </Routes>      
      
    </Container>
  )
}

export default App
