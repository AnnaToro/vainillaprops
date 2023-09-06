import React, { Component } from 'react';

class InicioSesion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      contraseña: '',
    };
  }