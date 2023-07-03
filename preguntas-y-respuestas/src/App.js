import random

preguntas = {
    "Que significa ESI?": "Entendemos la ESI una acción orientada a la educación de los niños y adolescentes, que teniendo en cuenta la pluralidad de dimensiones constitutivas de la persona, su integridad física como espiritual, los prepara para manejar adecuadamente sus afectos, a la vez que les informa científicamente sobre cuestiones relacionadas a su sexualidad.",
    "Como te das cuentas que estas en una relacion violenta?": "Violencia física y verbal, golpes, malas palabras, gritos, insultos no deben ser tolerados. Si tu pareja te critica constantemente o usa tus partes vulnerables para lastimarte, eso es violencia. Si evitas mezclar a tu pareja con amigos o familiares porque temes sentirse humillada o humillado, si tu pareja ha tratado de alejarte de tus seres queridos en un intento de controlar tu vida, este aislamiento es un indicio de violencia. En una relación cada persona debe responsabilizarse de sus acciones y emociones.", 
    "Cuales son los metodos anticonseptivos que existen?": "La pildora anticonceptiva:La Píldora es una tableta que tomas una vez al día – existen unos cuantos tipos diferentes de píldoras. La píldora combinada contiene estrógeno y progestina, que impiden que los ovarios liberen óvulos. También hacen que el moco cervical sea más espeso, lo que no permite que los espermatozoides lleguen al óvulo. La llamada mini-píldora contiene solo una hormona, una progestina, lo que ofrece una alternativa a aquellas mujeres a las que los estrógenos les afectan.

    Debes tomar la píldora todos los días a la misma hora, tanto si tienes sexo como si no. Pregunta a tu médico si, de acuerdo con tus antecedentes médicos, la píldora combinada es un método anticonceptivo adecuado para ti, si es así, pregunta qué tipo es mejor para ti. <br>
   Sistema intrauterino-SIU:El SIU es un dispositivo pequeño, suave, en forma de T, con un reservorio que contiene la hormona progestina que un profesional médico coloca en la matriz. El SIU actúa liberando continuamente una dosis baja de la progestina dentro de la matriz. Ésta hace que el moco del cérvix sea más espeso, lo que dificulta el movimiento de los espermatozoides para llegar al óvulo y también adelgaza el recubrimiento del útero. Con 99.8% de efectividad, estás tan protegida como podrías estarlo por un método anticonceptivo. Es un gran método para la super organizada, la olvidadiza, la viajera frecuente y prácticamente para cualquiera que se ha propuesto no embarazarse. Sin embargo, hay algunos factores de riesgo individuales que hacen que el SIU no sea recomendable para algunas mujeres. Por lo tanto, consulta a tu profesional médico con el fin de determinar tu situación individual. <br>
  Condon masculino:El condón, uno de los métodos anticonceptivos más populares, es una forma simple y barata de prevenir embarazos no planeados y ETS. El condón actúa capturando los espermatozoides a medida que éstos se liberan e impidiendo que entren a la vagina. La punta tiene un reservorio que colecta el semen del hombre e impide que entre a la vagina durante la eyaculación. Junto con los condones femeninos, son el único método anticonceptivo que te protege contra ETS y contra el embarazo. Lo más importante es que uses un condón cada vez que tengas sexo.

  Los condones vienen en todas las formas y tamaños y, para los que son sensibles, en todos materiales, de tal forma que, incluso si tienes alergias o piel sensible, hay un condón adecuado para ti. <br>
  ",
    "Cual?": "Pacífico",
    "Cua?": "Torre Eiffel"
}
while True:
    input("Presione Enter para girar la ruleta...")

    pregunta = random.choice(list(preguntas.keys()))
    respuesta = preguntas[pregunta]

    print("La pregunta es: ", pregunta)
    input("Presione Enter para ver la respuesta...")
    print("La respuesta es: ", respuesta)