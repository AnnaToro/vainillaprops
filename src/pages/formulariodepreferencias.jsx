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