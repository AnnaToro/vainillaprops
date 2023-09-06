import React, { Component } from 'react';
class Registro extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nombre: '',
        apellido: '',
        email: '',
        contraseña: '',
        confirmarContraseña: '',
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
        const { nombre, apellido, email, contraseña, confirmarContraseña } = this.state;
        if (contraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden');
          } else {  }
        }
      
        render() {
          return (<div>
            <h2>Registro</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label>Apellido:</label>
                <input
                  type="text"
                  name="apellido"
                  value={this.state.apellido}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label>Correo Electrónico:</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label>Contraseña:</label>
                <input
                  type="password"
                  name="contraseña"
                  value={this.state.contraseña}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label>Confirmar Contraseña:</label>
                <input
                  type="password"
                  name="confirmarContraseña"
                  value={this.state.confirmarContraseña}
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="submit">Registrar</button>
            </form>
          </div>
        );
      }
    }
    export default Registro;