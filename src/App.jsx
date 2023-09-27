
import './App.css'
import { WebNavBar } from './WebNavbar'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { Home } from './page/Home'
import { PasswordChecker } from './page/PasswordChecker'
import { PasswordSuggestion } from './page/PasswordSuggestion'

function App() {

  return (
    <>
    <Container fluid className='px-0 mainContainer'>
    <WebNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/passwordchecker' element={<PasswordChecker/>}/>
        <Route path='/passwordsuggestion' element={<PasswordSuggestion/>}/>

      </Routes>
      </Container>
    </>
  )
}

export default App
