const listaCarti = [
  {
    titlu: "Scufita Rosie",
    autor: "Fratii Grimm",
    esteCitita: true,
  },
  {
    titlu: "Alchimistul",
    autor: "Paulo Coehlo",
    esteCitita: false,
  },
  {
    titlu: "Fram, ursul polar",
    autor: "Cezar Petrescu",
    esteCitita: true,
  },
  {
    titlu: "Puterea prezentului",
    autor: "Eckhart Tolle",
    esteCitita: false,
  },
];

function afiseazaCarti(listaCarti) {
  for (const carte of listaCarti) {
    console.log(`${carte.titlu} de ${carte.autor}`);

    if (carte.esteCitita) {
      console.log("Ai citit deja " + carte.titlu + " de " + carte.autor);
    } else {
      console.log("Trebuie sa citesti " + carte.titlu + " de " + carte.autor);
    }
  }
}

afiseazaCarti(listaCarti);
