// Array de temas de ESI
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
    // Estado para almacenar el tema actual seleccionado
    const [temaActual, setTemaActual] = useState('');

      // Función para girar la ruleta y seleccionar un tema aleatorio
    const girarRuleta = () => {
            // Genera un índice aleatorio dentro del rango de temasESI
        const indiceAleatorio = Math.floor(Math.random() * temasESI.length);
         // Obtiene el tema aleatorio utilizando el índice
        const temaAleatorio = temasESI[indiceAleatorio];
            // Actualiza el estado del tema actual
        setTemaActual(temaAleatorio);
    };
    return ( <
        Container className = "text-center mt-5" >
        <
        h1 > Ruleta de Temas de ESI < /h1> <
        p > ¡Gira la ruleta y descubre un tema de ESI! < /p> <
        Button variant = "primary"
        onClick = { girarRuleta } >
        Girar <
        /Button> {
            {/* Si hay un tema actual seleccionado, muestra la información */}
            temaActual && ( <
                div className = "mt-3" >
                <
                h2 > Tema seleccionado: < /h2> <
                p > { temaActual } < /p> <
                /div>
            )
        } <
        /Container>
    );
};
export default App;