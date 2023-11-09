import React from 'react';
import './tablero.css';

const NivelesEscalera = () => {
  const numeroNiveles = 5; 
  return (
    
    <div className="contenedor-principal">
      <nav className="navbar">Mi Navbar</nav>
      <div className="contenedor-escalera">
        {Array.from({ length: numeroNiveles }, (_, index) => (
          <div key={index} className={`nivel nivel-${index + 1}`}></div>
       

    <div className="contenedor-principal">
      <nav className="navbar">Mi Navbar</nav>
      <div className="contenedor-escalera">
        {Array.from({ length: numeroNiveles }, (_, index) => (
          <div key={index} className={`nivel nivel-${index + 1}`}></div>

    <div className="contenedor-principal">
      <nav className="navbar">Mi Navbar</nav
<div className="contenedor-principal">
      <nav className="navbar">Mi Navbar</nav>
      <div className="contenedor-escalera">
        {Array.from({ length: numeroNiveles }, (_, index) => (
          <div key={index} className={`nivel nivel-${index + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default NivelesEscalera;