
import RentEasy from './SmartRent/RentEasy'
import Login from './SmartRent/Login'
import Register from './SmartRent/Register'
import { Routes, Route } from 'react-router'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<RentEasy/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
