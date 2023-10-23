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
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log(`Username: ${username} - Password: ${password}`);
    // También puedes redirigir al usuario a otra página después del inicio de sesión
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
