//import de funciones
import {
  atkProtossAlTerran,
  atkProtossAlZerg,
  atkProtossATerranPotenciado,
  atkProtossAZergPotenciado,
  atkProtossPotenciadoAlZerg,
  atkProtossPotenciadoATerran,
  atkTerranAlProtoss,
  atkTerranAlZerg,
  atkTerranAProtossPotenciado,
  atkTerranAZergPotenciado,
  atkTerranPotenciadoAlZerg,
  atkTerranPotenciadoAProtoss,
  atkZergAlProtoss,
  atkZergAlTerran,
  atkZergAProtossPotenciado,
  atkZergATerranPotenciado,
  atkZergPotenciadoAProtoss,
  atkZergPotenciadoATerran,
  lore,
  // volverAJugar,
  // volverAdecidirSiJuegaOtraVez,
  menuDeBienvenida,
  potenciarProtoss,
  potenciarTerran,
  potenciarZerg,
  protossDerrotado,
  ProtossOponente,
  RazaProtossSelected,
  RazaTerranSelected,
  RazaZergSelected,
  terranDerrotado,
  TerranOponente,
  vidaProtoss,
  vidaProtossPotenciada,
  vidaTerran,
  vidaTerranPotenciada,
  vidaZerg,
  vidaZergPotenciada,
  zergDerrotado,
  ZergOponente,
} from "./repositorioFunciones.js";

//asignaciones
let raza;
let volverAEscogerRaza = true;
let volverAseleccionarOponente = true;
let seleccionarBatalla;

menuDeBienvenida();
lore();

do {
  raza = prompt(
    "Elige tu raza para la batalla | Terran / Zerg / Protoss [t/z/p] >",
  ).toLowerCase().trim();

  switch (raza) {
    case "t":
    case "terran":
    case "1":
      RazaTerranSelected();

      volverAEscogerRaza = false;

      do {
        seleccionarBatalla = prompt(
          "Elige tu oponente | Zerg / Protoss [z/p] >",
        ).toLowerCase();
        volverAseleccionarOponente = false;

        switch (seleccionarBatalla) {
          case "zerg":
          case "z":
          case "1":
            ZergOponente();

            while (
              vidaTerran >= 0 && vidaZerg >= 0 ||
              vidaZerg >= 0 && vidaTerran >= 0
            ) {
              alert("Tu turno");
              atkTerranAlZerg();

              if (vidaZerg <= 0) {
                zergDerrotado();
                potenciarTerran();
                ProtossOponente();

                while (
                  vidaTerranPotenciada >= 0 && vidaProtoss >= 0 ||
                  vidaProtoss >= 0 && vidaTerranPotenciada >= 0
                ) {
                  alert("Tu turno");
                  atkTerranPotenciadoAProtoss();

                  if (vidaProtoss <= 0) {
                    protossDerrotado();
                  }

                  if (vidaProtoss <= 0 && vidaZerg <= 0) {
                    console.log(
                      `%c¡Has derrotado a todos tus enemigos!`,
                      "color: green",
                    );
                    break;
                  }

                  atkProtossATerranPotenciado();
                }

                if (vidaTerranPotenciada <= 0) {
                  console.log(
                    `%c¡Tu terran ha muerto en una no muy gloriosa batalla!`,
                    "color: red",
                  );
                  break;
                }
                break;
              }

              alert("Turno del oponente");

              atkZergAlTerran();
            }

            if (vidaTerran <= 0) {
              console.log(
                `%c¡Tu terran ha muerto en una no muy gloriosa batalla!`,
                "color: red",
              );
              // volverAJugar()
              //   tag:

              //   do {
              //   volverASeleccionarRazaDespuesDePerder = prompt("¿deseas volver a jugar, "
              //   // +nombre,
              //   ,"? [s/n]")

              //   switch (volverASeleccionarRazaDespuesDePerder) {
              //     case "s":
              //       case "si":
              //         volverAdecidirSiJuegaOtraVez =false;
              //       continue tag;

              //       case "no":
              //         case "n":
              //           console.log(`%cAdios`, "color:green")
              //           volverAdecidirSiJuegaOtraVez =false;
              //         break;

              //     default:
              //        alert ("No has escogido una opcion valida, intente nuevamente")
              //       volverAdecidirSiJuegaOtraVez =true;

              //   }

              // } while (volverAdecidirSiJuegaOtraVez)

              break;
            }
            volverAseleccionarOponente = false;

            break;

          case "2":
          case "p":
          case "protoss":
            ProtossOponente();

            while (
              vidaTerran >= 0 && vidaProtoss >= 0 ||
              vidaProtoss >= 0 && vidaTerran >= 0
            ) {
              alert("Tu turno");
              atkTerranAlProtoss();

              if (vidaProtoss <= 0) {
                protossDerrotado();
                potenciarTerran();
                ZergOponente();

                while (
                  vidaTerranPotenciada >= 0 && vidaZerg >= 0 ||
                  vidaZerg >= 0 && vidaTerranPotenciada >= 0
                ) {
                  alert("Tu turno");
                  atkTerranPotenciadoAlZerg();

                  if (vidaZerg <= 0) {
                    zergDerrotado();
                  }

                  if (vidaProtoss <= 0 && vidaZerg <= 0) {
                    console.log(
                      `%c¡Has derrotado a todos tus enemigos!`,
                      "color: green",
                    );
                    break;
                  }

                  atkZergATerranPotenciado();
                }

                if (vidaTerranPotenciada <= 0) {
                  console.log(
                    `%c¡Tu terran ha muerto en una no muy gloriosa batalla!`,
                    "color: red",
                  );
                  break;
                }
                break;
              }

              alert("Turno del oponente");
              atkProtossAlTerran();
            }

            if (vidaTerran <= 0) {
              console.log(
                `%c¡Tu terran ha muerto en una no muy gloriosa batalla!`,
                "color: red",
              );

              break;
            }
            volverAseleccionarOponente = false;

            break;

          default:
            raza = prompt("No has escogido un oponente valido");
            volverAseleccionarOponente = true;
        }
      } while (volverAseleccionarOponente);
      break;

    case "z":
    case "zerg":
    case "2":
      RazaZergSelected();

      volverAEscogerRaza = false;

      do {
        seleccionarBatalla = prompt(
          "Elige tu oponente | Terran / Protoss [t/p] >",
        ).toLowerCase();
        volverAseleccionarOponente = false;

        switch (seleccionarBatalla) {
          case "terran":
          case "t":
          case "1":
            TerranOponente();

            while (
              vidaTerran >= 0 && vidaZerg >= 0 ||
              vidaZerg >= 0 && vidaTerran >= 0
            ) {
              alert("Tu turno");
              atkZergAlTerran();

              if (vidaTerran <= 0) {
                terranDerrotado();
                potenciarZerg();
                ProtossOponente();

                while (
                  vidaZergPotenciada >= 0 && vidaProtoss >= 0 ||
                  vidaProtoss >= 0 && vidaZergPotenciada >= 0
                ) {
                  alert("Tu turno");
                  atkZergPotenciadoAProtoss();

                  if (vidaProtoss <= 0) {
                    protossDerrotado();
                  }

                  if (vidaProtoss <= 0 && vidaTerran <= 0) {
                    console.log(
                      `%c¡Has derrotado a todos tus enemigos!`,
                      "color: green",
                    );
                    break;
                  }

                  atkProtossAZergPotenciado();
                }

                if (vidaZergPotenciada <= 0) {
                  console.log(
                    `%c¡Tu zerg ha muerto en una no muy gloriosa batalla!`,
                    "color: red",
                  );
                  break;
                }
                break;
              }

              alert("Turno del oponente");
              atkTerranAlZerg();
            }

            if (vidaZerg <= 0) {
              console.log(
                `%c¡Tu zerg ha muerto en una no muy gloriosa batalla!`,
                "color: red",
              );

              break;
            }
            volverAseleccionarOponente = false;

            break;

          case "2":
          case "p":
          case "protoss":
            ProtossOponente();

            while (
              vidaZerg >= 0 && vidaProtoss >= 0 ||
              vidaProtoss >= 0 && vidaZerg >= 0
            ) {
              alert("Tu turno");
              atkZergAlProtoss();

              if (vidaProtoss <= 0) {
                protossDerrotado();
                potenciarZerg();
                TerranOponente();

                while (
                  vidaZergPotenciada >= 0 && vidaTerran >= 0 ||
                  vidaTerran >= 0 && vidaZergPotenciada >= 0
                ) {
                  alert("Tu turno");
                  atkZergPotenciadoATerran();

                  if (vidaTerran <= 0) {
                    terranDerrotado();
                  }

                  if (vidaProtoss <= 0 && vidaTerran <= 0) {
                    console.log(
                      `%c¡Has derrotado a todos tus enemigos!`,
                      "color: green",
                    );
                    break;
                  }
                  atkTerranAZergPotenciado();
                }

                if (vidaZergPotenciada <= 0) {
                  console.log(
                    `%c¡Tu zerg ha muerto en una no muy gloriosa batalla!`,
                    "color: red",
                  );
                  break;
                }
                break;
              }

              alert("Turno del oponente");

              atkProtossAlZerg();
            }

            if (vidaZerg <= 0) {
              console.log(
                `%c¡Tu zerg ha muerto en una no muy gloriosa batalla!`,
                "color: red",
              );

              break;
            }
            volverAseleccionarOponente = false;

            break;

          default:
            raza = prompt("No has escogido un oponente valido");
            volverAseleccionarOponente = true;
        }
      } while (volverAseleccionarOponente);
      break;

    case "p":
    case "protoss":
    case "3":
      RazaProtossSelected();
      volverAEscogerRaza = false;

      do {
        seleccionarBatalla = prompt("Elige tu oponente | Terran / Zerg [t/z] >")
          .toLowerCase();
        volverAseleccionarOponente = false;

        switch (seleccionarBatalla) {
          case "terran":
          case "t":
          case "1":
            TerranOponente();

            while (
              vidaTerran >= 0 && vidaProtoss >= 0 ||
              vidaProtoss >= 0 && vidaTerran >= 0
            ) {
              alert("Tu turno");
              atkProtossAlTerran();

              if (vidaTerran <= 0) {
                terranDerrotado();
                potenciarProtoss();
                ZergOponente();

                while (
                  vidaProtossPotenciada >= 0 && vidaZerg >= 0 ||
                  vidaZerg >= 0 && vidaProtossPotenciada >= 0
                ) {
                  alert("Tu turno");
                  atkProtossPotenciadoAlZerg();

                  if (vidaZerg <= 0) {
                    zergDerrotado();
                  }

                  if (vidaTerran <= 0 && vidaZerg <= 0) {
                    console.log(
                      `%c¡Has derrotado a todos tus enemigos!`,
                      "color: green",
                    );
                    break;
                  }

                  atkZergAProtossPotenciado();
                }

                if (vidaProtossPotenciada <= 0) {
                  console.log(
                    `%c¡Tu protoss ha muerto en una no muy gloriosa batalla!`,
                    "color: red",
                  );
                  break;
                }
                break;
              }

              alert("Turno del oponente");
              atkZergAlProtoss();
            }

            if (vidaProtoss <= 0) {
              console.log(
                `%c¡Tu protoss ha muerto en una no muy gloriosa batalla!`,
                "color: red",
              );

              break;
            }
            volverAseleccionarOponente = false;

            break;

          case "2":
          case "z":
          case "zerg":
            ZergOponente();

            while (
              vidaZerg >= 0 && vidaProtoss >= 0 ||
              vidaProtoss >= 0 && vidaZerg >= 0
            ) {
              alert("Tu turno");
              atkProtossAlZerg();

              if (vidaZerg <= 0) {
                zergDerrotado();
                potenciarProtoss();
                TerranOponente();

                while (
                  vidaProtossPotenciada >= 0 && vidaTerran >= 0 ||
                  vidaTerran >= 0 && vidaProtossPotenciada >= 0
                ) {
                  alert("Tu turno");
                  atkProtossPotenciadoATerran();

                  if (vidaTerran <= 0) {
                    terranDerrotado();
                  }

                  if (vidaZerg <= 0 && vidaTerran <= 0) {
                    console.log(
                      `%c¡Has derrotado a todos tus enemigos!`,
                      "color: green",
                    );
                    break;
                  }

                  atkTerranAProtossPotenciado();
                }

                if (vidaProtossPotenciada <= 0) {
                  console.log(
                    `%c¡Tu protoss ha muerto en una no muy gloriosa batalla!`,
                    "color: red",
                  );
                  break;
                }
                break;
              }

              alert("Turno del oponente");
              atkTerranAlProtoss();
            }

            if (vidaProtoss <= 0) {
              console.log(
                `%c¡Tu zerg ha muerto en una no muy gloriosa batalla!`,
                "color: red",
              );

              break;
            }
            volverAseleccionarOponente = false;

            break;

          default:
            raza = prompt("No has escogido un oponente valido");
            volverAseleccionarOponente = true;
        }
      } while (volverAseleccionarOponente);

      break;

    default:
      raza = prompt("No has escogido una raza valida, intenta nuevamente");
      volverAEscogerRaza = true;
  }
} while (volverAEscogerRaza);
