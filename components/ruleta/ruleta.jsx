import React, { useState } from 'react';

const Roulette = () => {
  const options = [
    'Rosado Claro',
    'Rosado Medio',
    'Rosado Oscuro',
    'Rosado Pastel',
    'Rosa Chicle',
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
    </div>
  );
};

export default Roulette;
