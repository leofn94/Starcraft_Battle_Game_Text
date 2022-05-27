let nombre = prompt("Empecemos esta aventura, escriba su nombre >");
let confirmacionNombre;
let repetirNombre = true;

do {
  confirmacionNombre = prompt(
    `Esta seguro que su nombre es ${nombre}? | Elija [si/no] >`,


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
        "color: cyan");

      repetirNombre = false;
      break;

    case "no":
    case "n":
      nombre = prompt(
        "¡No es momento para dudar de su propio nombre! Escribalo bien esta vez >",
      );
      break;

    default:
      confirmacionNombre = prompt("Son solo dos opciones mijo. Elija [si/no] >");

      break;
  }
} while (repetirNombre);

console.log(
  "Existen 3 razas en disputa y está en tus manos decidir el destino del universo",
);

alert("presione");

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

