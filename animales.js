const animales = () => {
  let ty = prompt(
    "Seleccione el numero indicado para escoger tipos de animales que desea conocer: \n 1 - Vertebrados  \n 2 - Invertebrados \n 3 - Hervivoros \n 4 - Carnivoros"
  );
  if (ty !== "1" && ty !== "2" && ty !== "3" && ty !== "4") {
    alert("Debe seleccionar una opción entre 1 y 4");
  } else {
    //animales vertebrados
    if (ty === "1") {
      let tx = prompt(
        "Seleccione el numero indicado para escoger animal: \n 1 - Cocodrilo  \n 2 - Tortuga \n 3 - Gato \n 4 - Perro \n 5 - Iguana"
      );
      if (tx !== "1" && tx !== "2" && tx !== "3" && tx !== "4" && tx !== "5") {
        alert("Debe seleccionar una opción entre 1 y 5");
      } else {
        if (tx === "1") {
          alert(
            "Cocodrilo \n Es una familia de saurópsidos, arcosaurios comúnmente conocidos como cocodrilos. Incluye a catorce especies actuales.​ Se trata de grandes reptiles semiacuáticos que viven en las regiones tropicales de África, Asia, América y Australia."
          );
        }
        if (tx === "2") {
          alert(
            "Tortuga \n  Forman un orden de reptiles caracterizados por tener un tronco ancho y corto, y un caparazón que protege los órganos internos de su cuerpo. Son el grupo de reptiles más antiguo que existe ya que sobreviven desde el Triásico hasta la actualidad."
          );
        }
        if (tx === "3") {
          alert(
            "Gato \n  Llamado popularmente gato, y de forma coloquial minino, ​ michino, ​ michi, ​ micho, ​ mizo, ​ miz, ​ morroño​ o morrongo, ​ entre otros nombres, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada por la convivencia con el ser humano."
          );
        }
        if (tx === "4") {
          alert(
            "Perro \n  Es un cánido parecido a un lobo que se puede encontrar distribuido por todo el mundo. El perro descendía de un lobo antiguo, ahora extinto, siendo el lobo moderno el pariente vivo más cercano del perro."
          );
        }
        if (tx === "5") {
          alert(
            "Iguana \n  También conocida como iguana común es una especie de la familia Iguanidae. ​ Es un gran lagarto arbóreo. Mide hasta 2 m de longitud de cabeza a cola. Los machos alcanzan entre 30 y 40 cm de longitud hocico-cloaca, las hembras cerca de 10 centimetros; cola extremadamente larga y algo aplanada lateralmente."
          );
        }
      }
    }
    //fin animales Vertebrados

    //animales Invertebrados
    if (ty === "2") {
      let tx = prompt(
        "Seleccione el numero indicado para escoger animal: \n 1 - Pulpo  \n 2 - Araña \n 3 - Hormiga \n 4 - Mariposa \n 5 - Estrella de mar"
      );
      if (tx !== "1" && tx !== "2" && tx !== "3" && tx !== "4" && tx !== "5") {
        alert("Debe seleccionar una opción entre 1 y 5");
      } else {
        if (tx === "1") {
          alert(
            "Pulpo \n Los octópodos ​​ son un orden de moluscos cefalópodos octopodiformes conocidos comúnmente como pulpos. Al igual que otros cefalópodos, el pulpo es bilateralmente simétrico, con la boca y el pico situados en el punto central de sus ocho extremidades."
          );
        }
        if (tx === "2") {
          alert(
            "Araña \n  Son el orden más numeroso de la clase Arachnida, lejanamente emparentadas con otros grupos de artrópodos, como los insectos, con los que no deben confundirse. Tienen glándulas venenosas en los quelíceros, con las que paralizan a sus presas."
          );
        }
        if (tx === "3") {
          alert(
            "Hormiga \n  Son una familia de insectos eusociales que, como las avispas y las abejas, pertenecen al orden de los himenópteros."
          );
        }
        if (tx === "4") {
          alert(
            "Mariposa \n  Los lepidópteros son un orden de insectos holometábolos, casi siempre voladores, conocidos comúnmente como mariposas; las más conocidas son las mariposas diurnas, pero la mayoría de las especies son nocturnas y pasan muy inadvertidas."
          );
        }
        if (tx === "5") {
          alert(
            "Estrella de mar \n  Los asteroideos o estrellas de mar, son una clase del filo Echinodermata de simetría pentarradial, cuerpo aplanado formado por un disco pentagonal con cinco brazos o más. ​ El nombre «estrella de mar» se refiere esencialmente a los miembros de la clase Asteroidea."
          );
        }
      }
    }
    //fin animales Invertebrados

    //animales Hervivoros
    if (ty === "3") {
      let tx = prompt(
        "Seleccione el numero indicado para escoger animal: \n 1 - Caballo  \n 2 - Conejo \n 3 - Vaca \n 4 - Koala \n 5 - Elefante"
      );
      if (tx !== "1" && tx !== "2" && tx !== "3" && tx !== "4" && tx !== "5") {
        alert("Debe seleccionar una opción entre 1 y 5");
      } else {
        if (tx === "1") {
          alert(
            "Caballo \n Es un mamífero perisodáctilo domesticado de la familia de los équidos. Es un herbívoro perisodáctilo de gran porte, y cuello largo y arqueado poblado por largas crines. A la hembra del caballo se le llama yegua y a las crías, si son machos, potros o potrillos, y si son hembras, potras o potrancas."
          );
        }
        if (tx === "2") {
          alert(
            "Conejo \n  Es una especie de mamífero lagomorfo de la familia Leporidae, y el único miembro actual del género Oryctolagus. Mide hasta 50 cm y su masa puede ser hasta 2.5 kilogramos. Ha sido introducido en varios continentes y es la especie que se utiliza en la cocina y en la cunicultura."
          );
        }
        if (tx === "3") {
          alert(
            "Vaca \n  En el caso de la hembra; o toro, en el caso del macho, es un mamífero artiodáctilo de la familia de los bóvidos."
          );
        }
        if (tx === "4") {
          alert(
            "Koala\n  Es una especie de marsupial diprotodonto de la familia Phascolarctidae, endémico de Australia. Es el único representante existente de la familia Phascolarctidae y sus parientes vivos más cercanos son los wombats."
          );
        }
        if (tx === "5") {
          alert(
            "Elefante \n  Son una familia de mamíferos placentarios del orden Proboscidea. Antiguamente se clasificaban, junto con otros mamíferos de piel gruesa, en el orden, ahora inválido, de los paquidermos. Existen hoy en día tres especies y diversas subespecies."
          );
        }
      }
    }
    //fin animales Hervivoros
    //animales Carnivoros
    if (ty === "4") {
      let tx = prompt(
        "Seleccione el numero indicado para escoger animal: \n 1 - Águila  \n 2 - Coyote \n 3 - Delfin \n 4 - Gaviota \n 5 - Buitre"
      );
      if (tx !== "1" && tx !== "2" && tx !== "3" && tx !== "4" && tx !== "5") {
        alert("Debe seleccionar una opción entre 1 y 5");
      } else {
        if (tx === "1") {
          alert(
            "Águila \n Es el nombre dado a las aves de presa, del orden de Accipitriformes, ​, ​ familia Accipitridae, subfamilia Buteoninae. Pertenecen a varios géneros, los cuales están sujetos a una reclasificación más adecuada puesto que los expertos no llegan a una opinión consensuada."
          );
        }
        if (tx === "2") {
          alert(
            "Coyote \n  Es una especie de mamífero carnívoro de la familia Canidae. Los coyotes solo se encuentran en América del Norte, América Central y recientemente América del Sur; desde Canadá hasta Colombia. Habita en una gran diversidad de ecosistemas, tropicales, templados y áridos."
          );
        }
        if (tx === "3") {
          alert(
            "Delfin \n  Llamados también delfines oceánicos para distinguirlos de los platanistoideos o delfines de río, son una familia de cetáceos odontocetos muy heterogénea, que comprende 37 especies actuales."
          );
        }
        if (tx === "4") {
          alert(
            "Gaviota \n  Son un grupo de aves clasificadas dentro del orden Charadriiformes y familia Laridae, pertenecientes al suborden Lari. Están estrechamente relacionados con los charranes, los cuales eran considerados una subfamilia de las gaviotas. Laridae está compuestos por diez géneros y 56 especies."
          );
        }
        if (tx === "5") {
          alert(
            "Buitre \n  Son aves rapaces del orden Falconiformes que suelen alimentarse especialmente de animales muertos, aunque a falta de estos, son capaces de cazar presas vivas. Los buitres se encuentran distribuidos por todos los continentes, excepto la Antártida y Oceanía."
          );
        }
      }
    }
    //fin animales Carnivoros
  }
};
