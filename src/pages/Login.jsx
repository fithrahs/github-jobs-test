import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    if (!response.error) {
      localStorage.setItem('token', response.credential);
      navigate('/');
    }
  }
  return (
    <div className='login'>
      <div className="card-login">
        <GoogleOAuthProvider clientId="920465101842-270m9l1jnti1iug3tndst8sgn68e04jo.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={responseGoogle}
            onFailure={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  )
}

export default Login
