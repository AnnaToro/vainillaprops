function Formulario() {
      // Definir los estados iniciales utilizando el hook useState
    const [sexo, setSexo] =  useState(''); // Estado para el valor seleccionado en el campo de sexo
    const [edad, setEdad] = useState(''); // Estado para el valor ingresado en el campo de edad
    const [preferencias, setPreferencias] = useState(''); // Estado para el valor ingresado en el campo de preferencias

    // Funciones para manejar los cambios en los campos de formulario
    const handleSexoChange = (e) => {
        setSexo(e.target.value);
    };
    const handleEdadChange = (e) => {
        setEdad(e.target.value);
    };
    const handlePreferenciasChange = (e) => {
        setPreferencias(e.target.value);
    };
     // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sexo:', sexo);
        console.log('Edad:', edad);
        console.log('Preferencias:', preferencias);
    };
     // Renderizar el formulario
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
        <label >
        Edad:
        < input type = "text"
        value = { edad }
        onChange = { handleEdadChange }
        /> </label> <br / >
        <  label >
        Preferencias:
        <
        textarea value = { preferencias }
        onChange = { handlePreferenciasChange }
        /> </label> <br />
        <
        button type = "submit" > Enviar < /button> <
        /form>
    );
}

export default Formulario;
}

export default App;