// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      { enlace }
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import Navbar from './Navbar';

const Roulette = () => {
  const options = [
    { name: 'Rosado Claro', value: 'rosado-claro', color: '#FFC0CB' },
    { name: 'Rosado Medio', value: 'rosado-medio', color: '#FF69B4' },
    { name: 'Rosado Oscuro', value: 'rosado-oscuro', color: '#FF1493' },
    { name: 'Rosado Pastel', value: 'rosado-pastel', color: '#FFD1DC' },
    { name: 'Rosa Chicle', value: 'rosa-chicle', color: '#FF00FF' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const spinRoulette = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    setSelectedOption(options[randomIndex]);
  };

  const rouletteStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };
  return (
    <div>
      <h1>Ruleta de Preguntas</h1>
      <button onClick={spinRoulette}>Girar Ruleta</button>
      {selectedOption && <p>Opción seleccionada: {selectedOption}</p>}
      <p style={{ color: selectedOption.color }}>
              {selectedOption.name}
            </p>
            <Link to={`/${selectedOption.value}`}>Ir a la página</Link>
    </div>
    
  );
};

export default Roulette;
