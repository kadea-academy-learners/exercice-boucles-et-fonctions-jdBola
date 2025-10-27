/*
  Énoncé :
  Crée une fonction `maxDeTrois(a, b, c)` qui :
    - retourne "Les trois nombres sont égaux" si les trois valeurs sont identiques
    - retourne le plus grand des trois sinon
    - retourne null si le nombre d'arguments est incorrect ou si un argument n'est pas un nombre

  Signature attendue :
    function maxDeTrois(a, b, c) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function maxDeTrois(a, b, c) {
  // Placeholder neutre : retourne null pour indiquer non-implémentation

   if((arguments.length !== 3) || (isNaN(a) ||  typeof a!=='number') || (isNaN(b) ||  typeof b!=='number') || (isNaN(c) ||  typeof c!=='number')){
     return null;
 }
 switch(true){
  case a > b && a > c :
    return a
    break
    case b > a && b > c :
    return b
    break
    case c > b && c > a :
    return c
    break
    case a === b && b === c :
    return "Les trois nombres sont égaux"
    break
 }
 
}

console.log(maxDeTrois(1,2,3))
console.log(maxDeTrois(3,3,3))
console.log(maxDeTrois())



// Ne pas modifier la ligne ci-dessous
module.exports = { maxDeTrois };
