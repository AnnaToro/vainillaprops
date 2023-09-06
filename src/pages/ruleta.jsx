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
    return ( <
        Container className = "text-center mt-5" >
        <
        h1 > Ruleta de Temas de ESI < /h1> <
        p > ¡Gira la ruleta y descubre un tema de ESI! < /p> <
        Button variant = "primary"
        onClick = { girarRuleta } >
        Girar <
        /Button> {
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
