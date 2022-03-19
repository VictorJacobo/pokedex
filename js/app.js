window.onload = function () {
	var inicio = document.getElementById("inicio")
	var info = document.getElementById("conten")
	var fallo =  document.getElementById("error")

	inicio.style.display = "block"
	info.style.display = "none"
	fallo.style.display = "none"

	document.getElementById("inicio").className = "active"
	document.getElementById("conten").className = "desactive"
	document.getElementById("error").className = "desactive"
}

let about = [
	"Una extraña semilla fue plantada en su espalda al nacer. Las plantas brotan y crecen con este Pokémon.",
	"Cuando el brote en la espalda empieza a inflamarse, una ráfaga de aroma dulce indica que la flor nacerá.",
	"Hay una gran flor en la parte posterior de Venusaur. La flor se dice que tiene unos colores muy vivos si se pone en plena nutrición y a la luz del sol. El aroma de las flores calma las emociones de la gente.",
	"El fuego en la punta de la cola es una medida de su vida. Si está sano, su cola arde intensamente.",
	"Si se agita durante la batalla, se escupe llamas intensas, incinerando todo a sus alrededores.",
	"Escupe fuego tan caliente que funde las rocas. Puede causar los incendios forestales al soplar las llamas.",
	"Se alberga en su concha, y luego contraataca con chorros de agua en cada oportunidad.",
	"A menudo se esconde en el agua para acechar a su presa desprevenida. Para nadar rápido, mueve las orejas para mantener el equilibrio.",
	"Los chorros de agua, surtidores de los cañones de cohetes sobre su caparazón puede perforar una capa de acero.",
	"Se cubre con una piel verde. Cuando crece, se arroja la piel, se recubre de seda, y se convierte en un capullo.",
	"Una concha de acero duro protege a su tierno cuerpo. Se queda en silencio soportando las dificultades a la espera de la evolución.",
	"Le encanta la miel de las flores y pueden localizar los parches de flores que tienen incluso cantidades muy pequeñas de polen.",
	"Se encuentra a menudo en los bosques y praderas. Cuenta con una púa afilada, tóxica cerca de dos pulgadas en la parte superior de su cabeza.",
	"A la espera de la evolución, se esconde debajo de las hojas de los depredadores y en los rincones de las ramas.",
	"Su mejor ataque consiste en volar alrededor a gran velocidad, golpeando con las agujas de veneno, y luego volando.",
	"Es dócil y prefiere evitar el conflicto. Si se les molesta, sin embargo, puede devolver el golpe feroz.",
	"Vuela por su amplio territorio en busca de presas, berribandolas con sus garras muy desarrolladas.",
	"Aleteo sus alas con toda su fuerza, Pidgeot puede hacer una ráfaga de viento capaz de doblar grandes árboles.",
	"Cauteloso en extremo, su vitalidad robusta le permite vivir en cualquier tipo de ambiente.",
	"Se le disminuye sus colmillos en constante crecimiento al roer las cosas difíciles. Se puede masticar, aparte muros de ceniza.",
	"Se bate sus alas para volar pequeños espacios. A través de su pico, busca en la hierba su presa.",
	"Tiene la energía para seguir volando todo el día en sus amplias alas. Combate con su pico afilado.",
	"Se cuela a través de hierba sin hacer ruido y golpea a sus presas por la espalda.",
	"El patrón en su vientre parece ser una cara espantosa. Enemigos débiles huirán sólo al ver ese patrón.",
	"Se almacena la electricidad en los sacos eléctricos en sus mejillas. Cuando se libera la energía acumulada en una ráfaga, la energía eléctrica es igual a un rayo.",
	"Si se almacena demasiada electricidad, su comportamiento se vuelve agresivo. Para evitar esto, ocasionalmente vierte su energía en exceso y se calma por sí mismo.",
	"Para protegerse de los atacantes, se enrolla en una bola. Vive en las regiones áridas, con lluvias mínimas.",
	"Se enrolla en una bola para protegerse de los ataques enemigos. También se acurruca para evitar un golpe de calor durante el día cuando las temperaturas suben bruscamente.",
	"Aunque no le gusta luchar, una sola gota del veneno de púas puede resultar fatal.",
	"Los cuernos de la hembra se desarrollan lentamente. Prefiere ataques físicos como arañar y morder.",
	"Su cuerpo está blindado con escamas duras. Protegerá a los jóvenes en su madriguera, con su vida.",
	"Analiza sus alrededores, aumentando sus oídos de la hierba. Su cuerno es tóxico para su protección.",
	"Se enoja fácilmente. Haciendo pivotar su bien desarrollado cuerno salvaje, puede incluso atravesar el diamante.",
	"Se reconoce por ser duros como piedras y esconden su cuerno extendido. Tenga cuidado con la trompa, ya que contiene veneno.",
	"Su aspecto adorable hace que sea muy popular como mascota. Sin embargo, es raro y difícil de encontrar.",
	"Rara vez visto por la gente, se dice que se elaborará por la luna llena para jugar en lagos solitarios.",
	"Controla las bolas de fuego. A medida que crece, sus seis colas se separan para hacer más colas.",
	"Desde hace tiempo se dice que cada una de las nueve colas encarnan un poder mágico. Ninetales es de larga vida y tienen piel que brilla como el oro.",
	"Cautiva a los enemigos con sus ojos grandes, redondos, a continuación, arrulla a dormir, cantando una melodía suave.",
	"Su pelaje es el último en la suntuosidad. Dormir junto a un Wigglytuff es simplemente divino. Su cuerpo se expande al parecer sin fin cuando se inhala.",
	"Tiene desagrado por la luz del sol, duerme profundamente en los bosques y las cuevas hasta la puesta del sol.",
	"Una vez que se empieza a chupar la sangre, no se detiene hasta que esté lleno. Vuela por la noche en busca de presas.",
	"A menudo estas plantas tienen la raíz dentro del suelo durante el día y siembran las semillas a medida que caminan en la noche.",
	"La miel que cae de la baba de su boca huele tan atroz, que se pueden enroscar las narices más de una milla de distancia.",
	"Sus pétalos son los más grandes del mundo. A medida que camina, se dispersa el polen muy alergénico.",
	"El crecimiento hacia fuera de la parte posterior del insecto son los hongos llamados tochukaso. Los hongos crecen junto a el insecto.",
	"Parasect se sabe que infecta las raíces de los árboles grandes y drena los nutrientes. Cuando un árbol infectado muere, se mueven en otro árbol a la vez.",
	"Sus ojos actúan como el radar, lo que le permite estar activos en la oscuridad. Los ojos también puede disparar rayos de gran alcance.",
	"Las alas están cubiertas de escamas similares a polvo. Cada vez que bate sus alas, pierde el polvo altamente tóxico.",
	"Se entierra a través del suelo a poca profundidad. Deja la tierra levantada a su paso, por lo que es fácil de detectar.",
	"Se dice que vive en cráteres volcánicos en los picos de las montañas. Una vez al año, que arroja su piel y se hace más grande. La piel derramada se desmorona y vuelve a la tierra.",
	"Todo lo que hace es dormir durante el día. Por la noche, las patrullas de su territorio, con sus ojos encendidos.",
	"Aunque su pelaje tiene muchos admiradores, es difícil de plantear como animal de compañía debido a su mezquindad caprichosa.",
	"Está constantemente sacudido por un dolor de cabeza. Cuando el dolor de cabeza se vuelve intenso, comienza a utilizar los poderes misteriosos.",
	"Un Pokémon que vive en los lagos. Nada más rápido que cualquier campeón de natación humana.",
	"Vive en colonias sobre las copas de los árboles. Si uno se pone furioso, se alborotan colonias enteras sin ninguna razón.",
	"Se enfada si ves sus ojos y se enfada si se corre. Si lo golpean, se vuelve aún más loco.",
	"Su magnífico sentido del olfato se asegura de que este Pokémon no se olvide ningún olor, no importa qué. Utiliza su sentido del olfato para detectar las emociones de los demás.",
	"Un Pokemon que se describe en las leyendas chinas. Se dice que corre a una velocidad increíble.",
	"Su piel es delgada húmeda con una mancha de negro. Una parte de sus órganos internos pueden verse a través de la piel como un patrón en espiral.",
	"Su superficie corporal es siempre húmeda y lubricada con un líquido aceitoso. Debido a esta peculiar grasa, es fácil resbalar y deslizarse fuera de las garras de un enemigo en la batalla.",
	"Sus músculos muy desarrollados nunca se cansan, por mucho que lo ejerce. Este Pokémon puede nadar hacia adelante y hacia atrás a través del Océano Pacífico, sin esfuerzo.",
	"Un Pokémon que duerme 18 horas al día. La observación reveló que se utiliza teletransporte para cambiar su ubicación.",
	"Se rumorea que un niño con habilidades psíquicas transforma de repente en KADABRA mientras que él estaba ayudando a la investigación de los poderes extrasensoriales.",
	"A pesar de que tiene fuertes habilidades psíquicas y de gran inteligencia, los músculos son muy débiles. Usa el poder psíquico para mover su cuerpo.",
	"Lleva a cabo continuamente entrenamiento intenso para dominar todas las formas de las artes marciales. Su fuerza le permite fácilmente polipasto un luchador de sumo en sus hombros.",
	"Su cuerpo muscular es tan poderoso, que deben usar el cinturón de ahorro de energía para poder controlar sus movimientos.",
	"Es imposible defenderse de los golpes y los puños repartidos por sus cuatro brazos. Su lucha contra las llamaradas espíritu cuando se enfrenta a un duro rival.",
	"Su raíz se parece a un rostro humano. Debido a la yema, que se rumorea que es un tipo de la legendaria planta de mandrágora.",
	"Un Pokémon que parece ser una planta. Captura sus presas cuando estan desprevenidas rociándolos con un polvo tóxico.",
	"Se acumula en su boca un líquido con un olor a miel dulce, que en realidad es un ácido que disuelve cualquier cosa.",
	"Su cuerpo está casi enteramente compuesto de agua. Atrapa a su enemigo con sus dos largos tentáculos, luego apuñala con el aguijón venenoso en sus extremos.",
	"Vive en formaciones complejas de roca en el suelo marino y atrapa su presa usando sus 80 tentáculos. Su orbes brillan de color rojo cuando crece excitado o agitado.",
	"Se sube senderos de montaña utilizando sólo el poder de sus brazos. Debido a que se parecen a rocas que bordean los caminos, los caminantes pueden pisarlos sin darse cuenta.",
	"Descienden de las montañas en caída por las laderas empinadas. Son tan brutales, que aplastan a un lado los árboles que obstruyen y caen en rodadas enormes, con atronadoras tacleadas.",
	"Se dice que vive en cráteres volcánicos en los picos de las montañas. Una vez al año, que arroja su piel y se hace más grande. La piel derramada se desmorona y vuelve a la tierra.",
	"Alrededor de una hora después de su nacimiento, su crin y su cola de fuego crecen, dándole una apariencia impresionante.",
	"Por lo general, galopa por casualidad en los campos y llanuras. Pero una vez que Rapidash se pone serio, su garbo se llena de fuego y llamas, ya que galopa su camino hasta 150 mph.",
	"Esta siempre ausente perdido en sus pensamientos, pero nadie sabe lo que está pensando. Es bueno en la pesca con su cola.",
	"Vive tranquilamente junto al mar.",
	"Las unidades en sus lados generan ondas electromagnéticas que lo mantienen en el aire. Se alimenta de electricidad.",
	"Magneton emite una poderosa fuerza magnética que es fatal para la electrónica e instrumentos de precisión. Debido a esto, se dice que algunos pueblos advierten a la gente para mantener este Pokémon dentro de una pokebola.",
	"Siempre es visto con un palo de una planta. Al parecer, hay buenos palos y palos malos. Este Pokemon de vez en cuando se pelea con otros a través de palos de la elección.",
	"Aún para comer o dormir, una de las cabezas permanece siempre atenta a cualquier señal de peligro. Cuando se siente amenazado, huye en más de 60 millas por hora.",
	"Al parecer, las cabezas no son las únicas partes del cuerpo que tiene tres. Cuenta con tres juegos de corazones y pulmones, así, por lo que es capaz de correr largas distancias sin descanso.",
	"Un Pokémon que vive en los icebergs. Nada en el mar con la punta de su cabeza para romper el hielo.",
	"En la nieve, la capa de color blanco puro que cubre su cuerpo le sirve para ocultarse de los depredadores.",
	"Nace de los lodos en un arroyo sucio expuesto por los rayos-X de la luna. Vive en la basura.",
	" Al buscarlo normalmente no se detecta porque se mezcla con el suelo. Si lo toca puede causar una intoxicación terrible.",
	"Nada hacia atrás, abriendo y cerrando sus dos conchas. Su gran lengua siempre queda colgando hacia fuera.",
	"Lucha por mantener su concha bien cerrada para la protección y con disparos de los picos para repeler a los enemigos.",
	"Cuando se expone a un fuerte viento, Gastly de forma rapida se disminuye en un cuerpo gaseoso. Se agrupan bajo los aleros de las casas para escapar de los estragos del viento.",
	"Debido a su capacidad de deslizarse a través de paredes de bloques, se dice que es de otra dimensión.",
	"En lo profundo de la noche, la sombra proyectada por una farola de repente os sorprendan. En realidad, es un Gengar que corre más allá, mas que pretendiendo ser su sombra.",
	"Hay un imán en su cerebro que impide que un Onix pierda su dirección, mientras va en un túnel. A medida que crece, su cuerpo se vuelve cada vez más redondo y suave.",
	"Un descendiente del legendario animal baku, lo que se dice que come sueños. Es experto en hipnotismo.",
	"Al ver su péndulo puede inducir el sueño en tres segundos, incluso en alguien que acaba de despertar.",
	"Vive en madrigueras excavadas en las playas arenosas. Sus pinzas pueden volver a crecer si se rompen en la batalla.",
	"Las ondas de su pinza enorme, de gran tamaño en el aire para comunicarse con los demás. Pero dado que la pinza es tan pesado, este Pokémon se cansa rápidamente.",
	"Se ve como una Poké Ball. Es peligroso porque puede electrocutar o explotar al tacto.",
	"Se conoce a la deriva en el viento si está hinchado a reventar con la electricidad almacenada.",
	"Sus seis huevos se comunican por telepatía. Se pueden reunir rápidamente si se separan.",
	"Se le llama La Selva Tropical Caminante. Cada uno de los frutos secos tiene un rostro y una voluntad propia.",
	"Pinos para la madre que nunca volverá a ver. Al ver una imagen de su madre en la luna llena, él llora. Las manchas en el cráneo que lleva son de sus lágrimas.",
	"Marowak es la forma evolucionada de un Cubone que ha superado su tristeza por la pérdida de su madre y crecido fuerte. Este espíritu templado y endurecido de Pokemon no se rompe fácilmente.",
	"Sus piernas se estiran y contraen libremente. Al uso de estas extremidades primaverales, se cae sobre los enemigos con patadas devastadoras. Después de la batalla, se frota abajo cuando sus piernas estan cansadas. Hitmonlee tiene una habilidad pasiva especial.",
	"A Hitmonchan se dice que posee el espíritu de un boxeador que tuvo como objetivo convertirse en el campeón del mundo. Tener un espíritu indomable significa que nunca se dará por vencido.",
	"Cada vez que ve algo extraño, siempre lame el objeto, ya que memoriza las cosas por la textura y el sabor. Es momentáneamente sorprendido por cosas ácidas.",
	"Debido a que almacena varios tipos de gases tóxicos en su cuerpo, es propenso a estallar sin previo aviso.",
	"Crece alimentándose de los gases liberados por la basura. Aunque poco común, pocos se han encontrado.",
	"Una vez que comienza a correr, no se detiene. Su pequeño cerebro hace que sea tan tonto que no puede recordar por qué empezó a correr en el primer lugar.",
	"Su cuerno, que gira como un taladro, destruye edificios altos con un giro. Se levanta sobre sus patas traseras, y su cerebro se desarrolla bien.",
	"Chansey pone huevos nutricionalmente excelente todos los días. Los huevos son tan deliciosos, que son ávidamente devorados por incluso las personas que han perdido su apetito.",
	"Sus viñas se caen fácilmente y sin dolor si se enredan, lo que le permite hacer una rápida escapada. Las viñas perdidas son reemplazadas por un nuevo crecimiento al día siguiente.",
	"Se planta a sus crías en la bolsa de su vientre. Le permite a la cría jugar solo cuando se siente seguro.",
	"Mueve hábilmente agitando las aletas en su parte trasera a otro, se mueve en cualquier dirección, mientras que mira hacia adelante. Se escupe tinta para escapar del peligro si lo detecta.",
	"Las púas venenosas en todo su cuerpo son muy valorados como ingredientes para la fabricación de medicamentos herbarios tradicionales. No muestra misericordia a nada que se acerque a su nido.",
	"Sus aletas dorsales y pectorales están muy desarrollados como los músculos. Puede nadar a una velocidad de cinco nudos.",
	"Perfora agujeros en rocas en la corriente de camas. Esta es una innovación inteligente que evita que los huevos sean atacados o arrastrados por la corriente.",
	"Se reúne con otros en la noche y hace que su brillo central de color rojo se encienda y apaque con las estrellas titilantes. Se pueden regenerar los miembros si están separadas de su cuerpo.",
	"En el centro de su cuerpo es un núcleo rojo, que emite extrañas señales de radio en el cielo nocturno.",
	"Es un experto en la pantomima que puede crear paredes invisibles pero sólidas utilizando gestos e imitando.",
	"Su velocidad es tan rápida que aumenta la nitidez de sus guadañas gemelas. Las guadañas pueden cortar a través de gruesos troncos de un solo golpe malo.",
	"Sus gritos suenan como la voz humana. Sin embargo, es imposible saber lo que está tratando de decir.",
	"La mitad de los apagones se producen cuando este Pokémon aparece en las plantas generadoras de electricidad y se lo come.",
	"Nacido en la boca de un volcán, su cuerpo está cubierto por las llamas que brillan como el sol.",
	"Agarra a su presa con sus pinzas hasta que la presa se ​​rompe por la mitad. Lo que no puede romper, lo lanza lejos.",
	"Una vez que apunta a su enemigo, tiene una carga en la cabeza. Es famoso por su carácter violento.",
	"Se dice que son los más débiles Pokemon del mundo. Nadie sabe por qué se las ha arreglado para sobrevivir.",
	"Rara vez se ve en la naturaleza. Enorme y vicioso, que es capaz de destruir ciudades enteras en una rabia.",
	"Le encanta cruzar el mar con la gente y Pokémon en su espalda. Entiende el lenguaje humano.",
	"Tiene la capacidad para reconstituir su estructura entera celular para transformarse en lo que ve.",
	"Un extraño Pokémon que se adapta a ambientes hostiles, tomando en diferentes formas evolutivas.",
	"Se ha evolucionado para adaptarse a la vida acuática. Se mimetiza a distancia en el agua.",
	"Controla 10,000 voltios de potencia y puede elevar toda la piel en su cuerpo como si se tratara de agujas afiladas.",
	"Tiene un saco de llamas en su cuerpo. Su temperatura corporal supera 1.650 grados Fahrenheit antes de la batalla.",
	"Primer Pokémon creados artificialmente en el mundo. Se puede viajar a través del espacio electrónico.",
	"Un Pokémon que fue resucitado de un fósil con la ciencia moderna. Nadó en los mares antiguos.",
	"Se cree que este Pokémon se extinguió porque su concha espiral creció demasiado grande.",
	"Se cree que han habitado las playas de 300 millones de años. Está protegido por un caparazón rígido.",
	"Se cree que este Pokémon fue a tierra debido a que su presa se fue adaptando a la vida en la tierra.",
	"Un feroz Pokémon de la época prehistórica al que no bastan todos los avances tecnológicos actuales para regenerar a la perfección.",
	"No se encuentra satisfecho hasta haber ingerido 400 kg de comida cada día. Cuando acaba de comer, se queda dormido.",
	"Se dice que sus bellas alas azules se componen de hielo. Vuela en torno a las montañas nevadas con su larga cola al viento.",
	"Posee el poder de controlar la electricidad a su antojo. Según la creencia popular, anida oculto en oscuros nubarrones de tormenta.",
	"Una de las aves legendarias. Al batir las alas, las llamas que las envuelven emiten un hermoso fulgor rojo.",
	"Habita en orillas junto a fuertes corrientes de agua, como bajo cascadas. Muda la piel una y otra vez a medida que crece.",
	"Vive en lagos y mares de aguas cristalinas. Su poder para controlar el clima le permite alzar el vuelo llevado por el viento.",
	"Un Pokémon bondadoso y compasivo al que le resulta imposible dar la espalda a Pokémon o humanos que se encuentren a la deriva.",
	"Su ADN es casi el mismo que el de Mew. Sin embargo, su tamaño y carácter son muy diferentes.",
	"Si se observa a través de un microscopio, puede distinguirse cuán corto, fino y delicado es el pelaje de este Pokémon."]

var posicion;

function getRandom() {
	fetchData(Math.floor(Math.random() * (152 - 1)) + 1)
	scroll(0, 0)
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function under(word) {
  return word[0].toLowerCase() + word.slice(1);
}

function color(tipe){
	switch(tipe){
		case "grass": document.body.style.background = "rgb(158,211,85)"
					  document.body.style.background = "--moz-radial-gradient(circle, rgba(158,211,85,1) 36%, rgba(73,198,148,1) 63%, rgba(0,140,124,1) 75%)"
					  document.body.style.background = "-webkit-radial-gradient(circle, rgba(158,211,85,1) 36%, rgba(73,198,148,1) 63%, rgba(0,140,124,1) 75%)"
					  document.body.style.background = "radial-gradient(circle, rgba(158,211,85,1) 36%, rgba(73,198,148,1) 63%, rgba(0,140,124,1) 75%)"
					 break;
		case "fire": document.body.style.background = "rgb(54,37,56)"
					 document.body.style.background = "-moz-linear-gradient(90deg, rgba(54,37,56,1) 9%, rgba(81,48,81,1) 39%, rgba(112,46,57,1) 81%)"
					 document.body.style.background = "-webkit-linear-gradient(90deg, rgba(54,37,56,1) 9%, rgba(81,48,81,1) 39%, rgba(112,46,57,1) 81%)"
					 document.body.style.background = "linear-gradient(90deg, rgba(54,37,56,1) 9%, rgba(81,48,81,1) 39%, rgba(112,46,57,1) 81%)"
					 break;
		case"water": document.body.style.background = "rgb(7,88,144)"
					 document.body.style.background = "-moz-linear-gradient(90deg, rgba(7,88,144,1) 9%, rgba(5,148,168,1) 39%, rgba(2,143,164,1) 81%)"
					 document.body.style.background = "-webkit-linear-gradient(90deg, rgba(7,88,144,1) 9%, rgba(5,148,168,1) 39%, rgba(2,143,164,1) 81%)"
					 document.body.style.background = "linear-gradient(90deg, rgba(7,88,144,1) 9%, rgba(5,148,168,1) 39%, rgba(2,143,164,1) 81%)"
					 break;
		case "bug": document.body.style.background = "rgb(26,111,18)"
					document.body.style.background = "-moz-linear-gradient(90deg, rgba(26,111,18,1) 9%, rgba(45,150,89,1) 39%, rgba(191,170,15,1) 81%)"
					document.body.style.background = "-webkit-linear-gradient(90deg, rgba(26,111,18,1) 9%, rgba(45,150,89,1) 39%, rgba(191,170,15,1) 81%)"
					document.body.style.background = "linear-gradient(90deg, rgba(26,111,18,1) 9%, rgba(45,150,89,1) 39%, rgba(191,170,15,1) 81%)"
					 break;
		case "normal": document.body.style.background = "rgb(32,215,62)"
					   document.body.style.background = "-moz-linear-gradient(90deg, rgba(32,215,62,1) 0%, rgba(29,253,183,1) 50%, rgba(180,252,69,1) 100%)"
					   document.body.style.background = "-webkit-linear-gradient(90deg, rgba(32,215,62,1) 0%, rgba(29,253,183,1) 50%, rgba(180,252,69,1) 100%)"
					   document.body.style.background = "linear-gradient(90deg, rgba(32,215,62,1) 0%, rgba(29,253,183,1) 50%, rgba(180,252,69,1) 100%)"
					 break;
		case "poison": document.body.style.background = "rgb(21,12,65)"
					   document.body.style.background = "-moz-linear-gradient(90deg, rgba(21,12,65,1) 9%, rgba(27,22,111,1) 39%, rgba(67,23,140,1) 81%)"
					   document.body.style.background = "-webkit-linear-gradient(90deg, rgba(21,12,65,1) 9%, rgba(27,22,111,1) 39%, rgba(67,23,140,1) 81%)"
					   document.body.style.background = "linear-gradient(90deg, rgba(21,12,65,1) 9%, rgba(27,22,111,1) 39%, rgba(67,23,140,1) 81%)"
					 break;
		case "electric": document.body.style.background = "rgb(3,19,51)"
					     document.body.style.background = "-moz-linear-gradient(90deg, rgba(3,19,51,1) 27%, rgba(30,105,122,1) 75%, rgba(161,163,33,1) 100%)"
					     document.body.style.background = "-webkit-linear-gradient(90deg, rgba(3,19,51,1) 27%, rgba(30,105,122,1) 75%, rgba(161,163,33,1) 100%)"
					     document.body.style.background = "linear-gradient(90deg, rgba(3,19,51,1) 27%, rgba(30,105,122,1) 75%, rgba(161,163,33,1) 100%)"
					 break;
		case "ground": document.body.style.background = "rgb(236,199,144)"
					   document.body.style.background = "-moz-radial-gradient(circle, rgba(236,199,144,1) 36%, rgba(194,154,120,1) 63%, rgba(158,117,89,1) 75%)"
					   document.body.style.background = "-webkit-radial-gradient(circle, rgba(236,199,144,1) 36%, rgba(194,154,120,1) 63%, rgba(158,117,89,1) 75%)"
					   document.body.style.background = "radial-gradient(circle, rgba(236,199,144,1) 36%, rgba(194,154,120,1) 63%, rgba(158,117,89,1) 75%)"
					 break;
		case "fairy": document.body.style.background = "rgb(42,47,146)"
					  document.body.style.background = "-moz-linear-gradient(90deg, rgba(42,47,146,1) 9%, rgba(87,77,180,1) 39%, rgba(145,108,235,1) 81%)"
					  document.body.style.background = "-webkit-linear-gradient(90deg, rgba(42,47,146,1) 9%, rgba(87,77,180,1) 39%, rgba(145,108,235,1) 81%)"
					  document.body.style.background = "linear-gradient(90deg, rgba(42,47,146,1) 9%, rgba(87,77,180,1) 39%, rgba(145,108,235,1) 81%)"
					 break;
		case "fighting": document.body.style.background = "rgb(255,255,209)"
					     document.body.style.background = "-moz-radial-gradient(circle, rgba(255,255,209,1) 9%, rgba(202,186,113,1) 39%, rgba(128,105,78,1) 81%)"
					     document.body.style.background = "-webkit-radial-gradient(circle, rgba(255,255,209,1) 9%, rgba(202,186,113,1) 39%, rgba(128,105,78,1) 81%)"
					     document.body.style.background = "radial-gradient(circle, rgba(255,255,209,1) 9%, rgba(202,186,113,1) 39%, rgba(128,105,78,1) 81%)"
					 break;
		case "psychic": document.body.style.background = "rgb(51,103,182)"
					    document.body.style.background = "-moz-radial-gradient(circle, rgba(51,103,182,1) 33%, rgba(75,46,142,1) 48%, rgba(31,22,65,1) 81%)"
					    document.body.style.background = "-webkit-radial-gradient(circle, rgba(51,103,182,1) 33%, rgba(75,46,142,1) 48%, rgba(31,22,65,1) 81%)"
					    document.body.style.background = "radial-gradient(circle, rgba(51,103,182,1) 33%, rgba(75,46,142,1) 48%, rgba(31,22,65,1) 81%)"
					 break;
		case "rock": document.body.style.background = "rgb(120,126,142)"
					 document.body.style.background = "-moz-linear-gradient(90deg, rgba(120,126,142,1) 21%, rgba(161,169,175,1) 57%, rgba(125,179,239,1) 88%)"
					 document.body.style.background = "-webkit-linear-gradient(90deg, rgba(120,126,142,1) 21%, rgba(161,169,175,1) 57%, rgba(125,179,239,1) 88%)"
					 document.body.style.background = "linear-gradient(90deg, rgba(120,126,142,1) 21%, rgba(161,169,175,1) 57%, rgba(125,179,239,1) 88%)"
					 break;
		case "ghost": document.body.style.background = " rgb(1,7,63)"
					  document.body.style.background = "-moz-linear-gradient(90deg, rgba(1,7,63,1) 8%, rgba(1,19,87,1) 42%, rgba(0,55,104,1) 73%)"
					  document.body.style.background = "-webkit-linear-gradient(90deg, rgba(1,7,63,1) 8%, rgba(1,19,87,1) 42%, rgba(0,55,104,1) 73%)"
					  document.body.style.background = "linear-gradient(90deg, rgba(1,7,63,1) 8%, rgba(1,19,87,1) 42%, rgba(0,55,104,1) 73%)"
					 break;
		case "ice": document.body.style.background = "rgb(16,117,148)"
					document.body.style.background = "-moz-linear-gradient(90deg, rgba(16,117,148,1) 30%, rgba(18,143,184,1) 52%, rgba(100,235,240,1) 100%)"
					document.body.style.background = "-webkit-linear-gradient(90deg, rgba(16,117,148,1) 30%, rgba(18,143,184,1) 52%, rgba(100,235,240,1) 100%)"
					document.body.style.background = "linear-gradient(90deg, rgba(16,117,148,1) 30%, rgba(18,143,184,1) 52%, rgba(100,235,240,1) 100%)"
					 break;
		case "dragon": document.body.style.background = "rgb(255,253,112)"
					   document.body.style.background = "-moz-radial-gradient(circle, rgba(255,253,112,1) 36%, rgba(154,155,64,1) 63%, rgba(93,129,76,1) 75%)"
					   document.body.style.background = "-webkit-radial-gradient(circle, rgba(255,253,112,1) 36%, rgba(154,155,64,1) 63%, rgba(93,129,76,1) 75%)"
					   document.body.style.background = "radial-gradient(circle, rgba(255,253,112,1) 36%, rgba(154,155,64,1) 63%, rgba(93,129,76,1) 75%)"
					 break;
	}
}

function Numeros(string){//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos
	
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
	     out += string.charAt(i);
	
    //Retornar valor filtrado
    return out;
} 


function show(param_div_id) {
	var inicio = document.getElementById("inicio")
	var info = document.getElementById("conten")
	var fallo =  document.getElementById("error")

	if (param_div_id === "conten") {
		inicio.style.display = "none"
		info.style.display = "block"
		fallo.style.display = "none"

		document.getElementById("inicio").className = "desactive"
		document.getElementById("conten").className = "active"
		document.getElementById("error").className = "desactive"
	} else {
		inicio.style.display = "none"
		info.style.display = "none"
		fallo.style.display = "block"

		document.getElementById("inicio").className = "desactive"
		document.getElementById("conten").className = "desactive"
		document.getElementById("error").className = "active"
	}

}

function derecha() {
	if(posicion == 151)
		fetchData(1)
	else
		fetchData(posicion+1)
	scroll(0, 0)
}

function izquierda() {
	if(posicion == 1)
		fetchData(151)
	else
		fetchData(posicion-1)
	scroll(0, 0)
}

function getName(id) {
	var pokename = document.getElementById(id).value
	scroll(0, 0)
	fetchData(under(pokename))
	document.getElementById(id).value = ""
}

const fetchData = async (pokename) => {
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
		const data = await res.json()

		if(data.id<1 || data.id >151) {
			show("error")
			color("normal")
		}	
		else {
			posicion = data.id;
			const pokemon = {
				nombre: data.name,
				id: data.id,
				tipo: data.types[0].type.name,
				peso: data.weight,
				altura: data.height,
				ataque: data.stats[1].base_stat,
				defensa: data.stats[2].base_stat,
				habilidad: data.abilities[0].ability.name,
			}
			show("conten")
			llenarData(pokemon)
		}
		
	} catch (error) {
		console.log(error)
		show("error")
		color("normal")
	}
}

const llenarData = (pokemon) => {
	console.log(pokemon)
	document.querySelector('#tarjeta').innerHTML = ""
	const flex = document.querySelector('#tarjeta')
	const template = document.querySelector('#template-card').content
	const clone = template.cloneNode(true)
	const fragment = document.createDocumentFragment()

	clone.querySelector('#descrip').innerHTML = `${about[pokemon.id-1]}`
	if (pokemon.nombre == "pikachu")
		clone.querySelector('#img-poke').setAttribute('src', `img/pikachu-${Math.floor(Math.random() * (9 - 1)) + 1}.gif`)
	else
		clone.querySelector('#img-poke').setAttribute('src', `img/${pokemon.nombre}.gif`)
	clone.querySelector('#nombre').innerHTML = `${capitalize(pokemon.nombre)}`
	clone.querySelector('#IDpoke').innerHTML = `#${pokemon.id}`
	clone.querySelector('#tipo').innerHTML = `${capitalize(pokemon.tipo)}`
	clone.querySelector('#peso').innerHTML = `${(pokemon.peso*0.1).toFixed(1)} kg`
	clone.querySelector('#altura').innerHTML = `${(pokemon.altura*0.1).toFixed(1)} m`
	clone.querySelector('#ataque').innerHTML = `${pokemon.ataque}`
	clone.querySelector('#defensa').innerHTML = `${pokemon.defensa}`
	clone.querySelector('#especial').innerHTML = `${capitalize(pokemon.habilidad)}`

	color(pokemon.tipo)
	fragment.appendChild(clone)
	flex.appendChild(fragment)
}


