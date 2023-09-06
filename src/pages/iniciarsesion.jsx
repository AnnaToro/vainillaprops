import React, { Component } from 'react';

class InicioSesion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      contraseña: '',
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { usuario, contraseña } = this.state;
}
render() {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={this.state.usuario}
            onChange={this.handleInputChange}
          />
        </div>