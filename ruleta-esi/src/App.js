import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const temasESI = [
    'Género y diversidad',
    'Educación sexual',
    'Cuidados sexuales',
    'Cuidado de la salud y el cuerpo',
    'Prevención de violencia',
    'Derechos humanos',
    'Salud emocional',
];
const App = () => {
        const [temaActual, setTemaActual] = useState('');

        const girarRuleta = () => {
            const indiceAleatorio = Math.floor(Math.random() * temasESI.length);
            const temaAleatorio = temasESI[indiceAleatorio];
            setTemaActual(temaAleatorio);
        };