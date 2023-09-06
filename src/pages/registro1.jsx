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