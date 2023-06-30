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
    const handlePreferenciasChange = (e) => {
        setPreferencias(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sexo:', sexo);
        console.log('Edad:', edad);
        console.log('Preferencias:', preferencias);
    };
    return ( <
        form onSubmit = { handleSubmit } >
        <
        label >
        Sexo:
        <
        select value = { sexo }
        onChange = { handleSexoChange } >
        <
        option value = "" > Seleccionar < /option> <
        option value = "Masculino" > Masculino < /option> <
        option value = "Femenino" > Femenino < /option> <
        /select> <
        /label> <
        br / >
        <
        label >
        Edad:
        <
        input type = "text"
        value = { edad }
        onChange = { handleEdadChange }
        /> <
        /label> <
        br / >
        <
        label >
        Preferencias:
        <
        textarea value = { preferencias }
        onChange = { handlePreferenciasChange }
        /> <
        /label> <
        br / >
        <
        button type = "submit" > Enviar < /button> <
        /form>
    );
}

export default Formulario;
}

export default App;