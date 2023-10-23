import React, { useState } from 'react';
import './loginForm.css'; 

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'usuario' && password === 'contraseña') {
        setIsLoggedIn(true); // Si las credenciales son correctas, estableces isLoggedIn a true
      } else {
        alert('Credenciales incorrectas'); // Si las credenciales son incorrectas, muestras un mensaje de error
      }
    }
  
    if (isLoggedIn) {
      return <div>¡Has iniciado sesión correctamente!</div>; // Si el usuario ha iniciado sesión, muestras un mensaje de éxito
    }
    console.log(`Username: ${username} - Password: ${password}`);
  }

  return (
    <div className="login-form">
      
      <img src="/logo.png" alt="Logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario o correo"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Iniciar</button>
      </form>
    </div>
  );
}

export default LoginForm;
