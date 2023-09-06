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