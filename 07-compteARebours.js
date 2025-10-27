/*
  /*
    Énoncé :
    Écris une fonction `compteARebours()` qui affiche dans la console les nombres de 10 à 1,
    un nombre par ligne.

    Signature attendue :
      function compteARebours() -> void

    Placeholder : version neutre (ne log rien) pour permettre l'exécution des tests
    sans lever d'exception. L'étudiant doit remplacer la fonction par son implémentation.
  */
  function compteARebours() {
    // Placeholder neutre : ne fait rien
    let i = 0
    for(i = 10 ; i >= 0; i--){
      console.log(i)
    }
  }

  console.log(compteARebours())

  // Ne pas modifier la ligne ci-dessous
  module.exports = { compteARebours }
// Ne pas modifier la ligne ci-dessous
