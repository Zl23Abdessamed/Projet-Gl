import AuthPagesWrapper from '../../Components/auth/AuthPagesWrapper'
import SignupForm from '../../Components/auth/SignupForm'

const authElementProps = {
  title : "Bienvenu à Dz-Teacher",
  description : "SVP , creez un compte pour continuer",
}

const SignupPage = () => {

  return (
    <div>
      <AuthPagesWrapper props={authElementProps} >
        <SignupForm />
      </AuthPagesWrapper>
    </div>
  )
}

export default SignupPage