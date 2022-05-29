//Datos de ataque y vida definidos
export const ataqueTerran = 80;
export const ataqueZerg = 120;
export const ataqueProtoss = 50;
export let vidaTerran = (Math.ceil(Math.random() * (800 - 650)) + 650);
export let vidaProtoss = (Math.ceil(Math.random() * (1300 - 1100)) + 1100);
export let vidaZerg = (Math.ceil(Math.random() * (650 - 400)) + 400);

//menu de bienvenida
export function menuDeBienvenida() {
  let repetirNombre = true;

  let nombre = prompt("Empecemos esta aventura, escriba su nombre >");
  do {
    let confirmacionNombre = prompt(
      `Esta seguro que su nombre es ${nombre}? | Elija [s/n] >`,
    ).toLowerCase();
    switch (confirmacionNombre) {
      case "si":
      case "s":
        console.log(
          `Bienvenido %c${nombre} %ca \n
            %cStarcraft: La aventura de texto
            `,
          "color: green",
          "color: null",
          "color: cyan",
        );

        console.log(
          `%c
          ╔═══╦════╦═══╦═══╦═══╦═══╦═══╦═══╦════╗
          ║╔═╗║╔╗╔╗║╔═╗║╔═╗║╔═╗║╔═╗║╔═╗║╔══╣╔╗╔╗║
          ║╚══╬╝║║╚╣║─║║╚═╝║║─╚╣╚═╝║║─║║╚══╬╝║║╚╝
          ╚══╗║─║║─║╚═╝║╔╗╔╣║─╔╣╔╗╔╣╚═╝║╔══╝─║║
          ║╚═╝║─║║─║╔═╗║║║╚╣╚═╝║║║╚╣╔═╗║║────║║
          ╚═══╝─╚╝─╚╝─╚╩╝╚═╩═══╩╝╚═╩╝─╚╩╝────╚╝`,
          "color: cyan")

        repetirNombre = false;
        break;

      case "no":
      case "n":
        nombre = prompt(
          "¡No es momento para dudar de su propio nombre! Escribalo bien esta vez >",
        );
        break;

      default:
        confirmacionNombre = prompt(
          "Son solo dos opciones mijo. Elija [si/no] >",
        );

        break;
    }
  } while (repetirNombre);
}

//lore
export function lore() {
  alert(
    "Existen 3 razas en disputa y está en tus manos decidir el destino del universo",
  );

  console.log(
    `Los %cTerran %cson marines humanos colonizadores del espacio. Vida y ataque equilibrados. 
      \n Los %cZerg %cson aliens depredadores. Unidad con mucho ataque pero vida limitada. 
      \n Los %cProtoss %cson aliens defensivos. Mucha vida y ataque reducido.`,
    "color: turquoise",
    "color: null",
    "color: purple",
    "color: null",
    "color: yellow",
    "color: null",
  );

  alert("presione");
}

// presentacion al seleccionar una raza
export function RazaTerranSelected() {
  console.log(
    `Has escogido a los %cterran %cpara hacer frente a las amenazas alienigenas`,
    "color: turquoise",
    "color: null",
  );

  console.log(
    `La vida de tu terran es de %c${vidaTerran} \n %cy su ataque es de %c${ataqueTerran}`,
    "color: turquoise",
    "color: null",
    "color: turquoise",
  );
  alert("presione");
}

export function RazaZergSelected() {
  console.log(
    `Has escogido a los despiadados %cZerg %cpara conquistar la galaxia`,
    "color: purple",
    "color: null",
  );

  console.log(
    `La vida de tu zerg es de %c${vidaZerg} \n %cy su ataque es de %c${ataqueZerg}`,
    "color: purple",
    "color: null",
    "color: purple",
  );
  alert("presione");
}

export function RazaProtossSelected() {
  console.log(
    `Has escogido a los milenarios %cProtoss %cpara purificar a tus enemigos`,
    "color: yellow",
    "color: null",
  );

  console.log(
    `La vida de tu protoss es de %c${vidaProtoss} \n %cy su ataque es de %c${ataqueProtoss}`,
    "color: yellow",
    "color: null",
    "color: yellow",
  );
  alert("presione");
}

// calculos simples de ataques inflingidos del TERRAN a oponentes
export function atkTerranAlProtoss() {
  return vidaProtoss -= ataqueTerran,
    console.log(
      `La vida restante del %cprotoss %ces de ${vidaProtoss}`,
      "color: yellow",
      "color : null",
    );
}

export function atkTerranAlZerg() {
  return vidaZerg -= ataqueTerran,
    console.log(
      `La vida restante del %czerg %ces de ${vidaZerg}`,
      "color: purple",
      "color : null",
    );
}

// calculos simples de ataques inflingidos del ZERG a oponentes
export function atkZergAlProtoss() {
  return vidaProtoss -= ataqueZerg,
    console.log(
      `La vida restante del %cprotoss %ces de ${vidaProtoss}`,
      "color: yellow",
      "color : null",
    );
}

export function atkZergAlTerran() {
  return vidaTerran -= ataqueZerg,
    console.log(
      `La vida restante del %cterran %ces de ${vidaTerran}`,
      "color: turquoise",
      "color:null",
    );
}

// calculos simples de ataques inflingidos del PROTOSS a oponentes
export function atkProtossAlTerran() {
  return vidaTerran -= ataqueProtoss,
    console.log(
      `La vida restante del %cterran %ces de ${vidaTerran}`,
      "color: turquoise",
      "color:null",
    );
}

export function atkProtossAlZerg() {
  return vidaZerg -= ataqueProtoss,
    console.log(
      `La vida restante del %czerg %ces de ${vidaZerg}`,
      "color: purple",
      "color:null",
    );
}

// calculos POTENCIADOS  de ataques inflingidos del TERRAN a oponentes
export function atkTerranPotenciadoAProtoss() {
  return vidaProtoss -= ataqueTerran * 3,
    console.log(
      `La vida restante del %cprotoss %ces de ${vidaProtoss}`,
      "color: yellow",
      "color : null",
    );
}

export function atkTerranPotenciadoAlZerg() {
  return vidaZerg -= ataqueTerran * 3,
    console.log(
      `La vida restante del %czerg %ces de ${vidaZerg}`,
      "color: purple",
      "color : null",
    );
}

// calculos POTENCIADOS  de ataques inflingidos del ZERG a oponentes
export function atkZergPotenciadoAProtoss() {
  return vidaProtoss -= ataqueZerg * 3,
    console.log(
      `La vida restante del %cprotoss %ces de ${vidaProtoss}`,
      "color: yellow",
      "color : null",
    );
}

export function atkZergPotenciadoATerran() {
  return vidaTerran -= ataqueZerg * 3,
    console.log(
      `La vida restante del %cterran %ces de ${vidaTerran}`,
      "color: turquoise",
      "color : null",
    );
}

// calculos POTENCIADOS  de ataques inflingidos del PROTOSS a oponentes
export function atkProtossPotenciadoAlZerg() {
  return vidaZerg -= ataqueProtoss * 3,
    console.log(
      `La vida restante del %czerg %ces de ${vidaZerg}`,
      "color: purple",
      "color : null",
    );
}

export function atkProtossPotenciadoATerran() {
  return vidaTerran -= ataqueProtoss * 3,
    console.log(
      `La vida restante del %cterran %ces de ${vidaTerran}`,
      "color: turquoise",
      "color : null",
    );
}

//Exportacion de variables POTENCIADAS
export let vidaTerranPotenciada;
export let vidaZergPotenciada;
export let vidaProtossPotenciada;

// calculos de ataques inflingidos del TERRAN A oponentes POTENCIADOS
export function atkTerranAProtossPotenciado() {
  alert("Turno del oponente");

  return vidaProtossPotenciada -= ataqueTerran,
    console.log(
      `La vida restante del %cprotoss %ces de ${vidaProtossPotenciada}`,
      "color: yellow",
      "color:null",
    );
}

export function atkTerranAZergPotenciado() {
  alert("Turno del oponente");

  return vidaZergPotenciada -= ataqueTerran,
    console.log(
      `La vida restante de tu %czerg %ces de ${vidaZergPotenciada}`,
      "color: purple",
      "color:null",
    );
}

// calculos de ataques inflingidos del ZERG A oponentes POTENCIADOS
export function atkZergAProtossPotenciado() {
  alert("Turno del oponente");

  return vidaProtossPotenciada -= ataqueZerg,
    console.log(
      `La vida restante de tu %cprotoss %ces de ${vidaProtossPotenciada}`,
      "color: yellow",
      "color:null",
    );
}

export function atkZergATerranPotenciado() {
  alert("Turno del oponente");

  return vidaTerranPotenciada -= ataqueZerg,
    console.log(
      `La vida restante de tu %cterran %ces de ${vidaTerranPotenciada}`,
      "color: turquoise",
      "color:null",
    );
}

// calculos de ataques inflingidos del PROTOSS A oponentes POTENCIADOS
export function atkProtossATerranPotenciado() {
  alert("Turno del oponente");

  return vidaTerranPotenciada -= ataqueProtoss,
    console.log(
      `La vida restante de tu %cterran %ces de ${vidaTerranPotenciada}`,
      "color: turquoise",
      "color:null",
    );
}

export function atkProtossAZergPotenciado() {
  alert("Turno del oponente");

  return vidaZergPotenciada -= ataqueProtoss,
    console.log(
      `La vida restante de tu %czerg %ces de ${vidaZergPotenciada}`,
      "color: purple",
      "color:null",
    );
}

// Funciones de POTENCIACION DE RAZA
export function potenciarTerran() {
  alert(
    "Al haber derrotado a tu oponente, obtienes un multiplicador de vida X4 y daño X3 !!",
  );
  console.log(
    `La nueva vida de tu terran es de %c${
      vidaTerran * 4
    } \n%cy su ataque aumenta a %c${ataqueTerran * 3}`,
    "color:turquoise",
    "color: null",
    "color:turquoise",
  );
  alert("preparate para tu proxima batalla");
  vidaTerranPotenciada = vidaTerran * 4;
}

export function potenciarZerg() {
  alert(
    "Al haber derrotado a tu oponente, obtienes un multiplicador de vida X4 y daño X3 !!",
  );
  console.log(
    `La nueva vida de tu zerg es de %c${
      vidaZerg * 4
    } \n%cy su ataque aumenta a %c${ataqueZerg * 3}`,
    "color:purple",
    "color: null",
    "color:purple",
  );
  alert("preparate para tu proxima batalla");
  vidaZergPotenciada = vidaZerg * 4;
}

export function potenciarProtoss() {
  alert(
    "Al haber derrotado a tu oponente, obtienes un multiplicador de vida X4 y daño X3 !!",
  );
  console.log(
    `La nueva vida de tu protoss es de %c${
      vidaProtoss * 4
    } \n%cy su ataque aumenta a %c${ataqueProtoss * 3}`,
    "color:yellow",
    "color: null",
    "color:yellow",
  );
  alert("preparate para tu proxima batalla");
  vidaProtossPotenciada = vidaProtoss * 4;
}

// Seleccion de Oponentes
export function ZergOponente() {
  console.log(`Vas a batallar con el %czerg`, "color: purple");
  alert("presione");
  console.log(
    `La vida del zerg es de %c${vidaZerg} \n %cy su ataque es de %c${ataqueZerg}`,
    "color: purple",
    "color:null",
    "color: purple",
  );
  alert("[COMIENZA LA BATALLA]");
}

export function TerranOponente() {
  console.log(`Vas a luchar con el marine %cterran`, "color: turquoise");
  alert("presione");
  console.log(
    `La vida del terran es de %c${vidaTerran} \n %cy su ataque es de %c${ataqueTerran}`,
    "color: turquoise",
    "color:null",
    "color: turquoise",
  );
  alert("[COMIENZA LA BATALLA]");
}

export function ProtossOponente() {
  console.log(`Te enfrentaras con el %cprotoss`, "color: yellow");
  alert("presione");

  console.log(
    `La vida del protoss es de %c${vidaProtoss} \n %cy su ataque es de %c${ataqueProtoss}`,
    "color: yellow",
    "color:null",
    "color: yellow",
  );
  alert("[COMIENZA LA BATALLA]");
}

//Avisos cuando un enemigo ha sido  derrotado
export function zergDerrotado() {
  return console.log(`%c¡Has derrotado al zerg!`, "color: green");
}

export function protossDerrotado() {
  return console.log(`%c¡Has derrotado al protoss!`, "color: green");
}

export function terranDerrotado() {
  return console.log(`%c¡Has derrotado al terran!`, "color: green");
}

//ESTO no funcionó

// function vida (max, min) {
//     const vidaRandom = Math.round(Math.random()*(max-min))+min
//     return vidaRandom
// }

// function vidaTerran() {
//     return vida (800, 650)
// }

// function vidaZerg() {
//     return vida (650, 400)
// }

// function vidaProtoss() {
//     return vida (1000, 750)
// }



//VOLVER A JUGAR (NO FUNCIONA)
// tag:
// export function volverAJugar(){
//                 do {
//                 const volverASeleccionarRazaDespuesDePerder = prompt("¿deseas volver a jugar? [s/n]")

//                 switch (volverASeleccionarRazaDespuesDePerder) {
//                   case "s":
//                     case "si":
//                       volverAdecidirSiJuegaOtraVez =false;
//                       menuDeBienvenida()
//                     break;

//                     case "no":
//                       case "n":
//                         console.log(`%cAdios`, "color:green")
//                         volverAdecidirSiJuegaOtraVez =false;
//                       break;

//                   default:
//                      alert ("No has escogido una opcion valida, intente nuevamente")
//                     volverAdecidirSiJuegaOtraVez =true;

//                 }

//               } while (volverAdecidirSiJuegaOtraVez)
//             }

//             export let volverAdecidirSiJuegaOtraVez = true
