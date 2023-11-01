import axios from 'axios';

const CLIENT_ID = 'ebbfed28b1672a76fa9d';
const REDIRECT_URI = 'http://localhost:3000/callback';

function Login() {
  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
  };

  return (
    <div>
      <button onClick={handleLogin}>Iniciar sesión con GitHub</button>
    </div>
  );
}

export default Login;
