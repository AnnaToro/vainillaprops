import React, { useState } from 'react';
import firebase from '../firebaseConfig';
import './loginForm.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Registra al usuario con email y contraseña
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      
      // Registro exitoso, puedes redirigir al usuario a una página de inicio de sesión o realizar cualquier otra acción
      console.log('Registro exitoso');
    } catch (error) {
      // Ocurrió un error durante el registro, puedes mostrar un mensaje de error al usuario o realizar cualquier otra acción
      console.log('Error durante el registro:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
