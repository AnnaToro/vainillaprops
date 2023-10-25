import logo from './logo.svg';
import './App.css';
import login from './components'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Iniciar sesión</h2>
    <form id="loginForm">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <input type="submit" value="Iniciar sesión">
    </form>
    <p id="loginMessage"></p>
    <script src="login.js"></script>   
      </header>
    </div>
  );
}

export default App;
