import React from 'react';
import './EducationalQuestions.css';

const EducationalQuestions = () => {
  return (
    <div className="container">
      <h1>Preguntas sobre Educación Sexual Integral</h1>
      <div className="question">
        <h2>Pregunta 1:</h2>
        <p>¿Qué es la educación sexual integral?</p>
        <p>Respuesta 1: La educación sexual integral es...</p>
      </div>
      <div className="question">
        <h2>Pregunta 2:</h2>
        <p>¿Por qué es importante la educación sexual integral?</p>
        <p>Respuesta 2: La educación sexual integral es importante porque...</p>
      </div>
      <div className="question">
        <h2>Pregunta 3:</h2>
        <p>¿Cuáles son los objetivos de la educación sexual integral?</p>
        <p>Respuesta 3: Los objetivos de la educación sexual integral son...</p>
      </div>
    </div>
  );
};