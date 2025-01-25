import { Route, Routes } from 'react-router-dom'
import SignupPage from './SignupPage'
import LoginPage from './LoginPage'

const Auth = () => {
    return (
        <Routes>
            <Route path='signup' element={<SignupPage/>} />
            <Route path='signin' element={<LoginPage />} />
        </Routes>
    )
}


export default Auth;