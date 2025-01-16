let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net'];

let resultado = [];

function domainNameGenerator(domainNames){

  //Ciclos anidados para recorrer cada uno de los arreglos y realizar las combinaciones
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            for (let e = 0; e < extension.length; e++) {
                resultado.push(pronoun[p] + adj[a] + noun[n] + extension[e]);
            }
        }
    }
  }   
  return resultado;
}

console.log(domainNameGenerator(resultado));
