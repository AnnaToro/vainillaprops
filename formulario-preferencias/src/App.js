import React, { useState } from "react";

function Formulario() {
    const [sexo, setSexo] =
    useState('');
    const [edad, setEdad] =
    useState('');
    const [preferencias, setPreferencias] =
    useState('');

    const handleSexoChange = (e) => {
      setSexo(e.target.value);
    };
    const handleEdadChange = (e) => {
      setEdad(e.target.value);
    };

}

export default App;