import LoginForm from '../../Components/auth/LoginForm'
import AuthPagesWrapper from '../../Components/auth/AuthPagesWrapper'


const authElementProps = {
  title : "Bienvenu à Dz-Teacher",
  description : "SVP , entrez vos informations pour continuer",
}

const LoginPage = () => {
  return (
    <AuthPagesWrapper props={authElementProps} >
      <LoginForm />
    </AuthPagesWrapper>)
}

export default LoginPage