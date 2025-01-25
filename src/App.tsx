import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/landing/LandingPage'
import Auth from './Pages/auth/Auth'
import Main from './Pages/main/Main'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<LandingPage />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/main/*' element={<Main />} />
      </Routes>
    </>
  )
}

export default App
