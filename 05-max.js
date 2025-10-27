/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function max(a, b) {
 if((isNaN(a) ||  typeof a!=='number') || (isNaN(b) ||  typeof b!=='number')){
     return null;
 }
 switch(true){
  case a > b :
    return a
    break
  case b > a :
    return b
    break
  case a == b :
    return "Les deux nombres sont égaux"
    break
 }
 
}

console.log(max(1, 3))
console.log(max(4, 4))
console.log(max(1, 'Baba'))



// Ne pas modifier la ligne ci-dessous
module.exports = { max }
