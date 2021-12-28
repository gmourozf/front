var express = require('express')

let nb1 = 0;
nb1 = 12 * 5;
nb1 = 20 * 5;
nb1 = 2 ** 3;
console.log(nb1);

let nb2 = 10;
nb2 += 2
nb2 = nb2 + 2;
console.log(nb2);

let nb3 = Math.floor(5.4); // renvoie le premier chiffre 5 avant la virgule
console.log(nb3);

let nb4 = Math.random() * 100;
console.log(nb4);

function test() {
    let nom = 'georges';
    nom = `"Pseudo"  de ${nom} `
    return nom;
};

console.log(test());

const confirmation = confirm("Voulez-vous vraiment quitter la page ?");
if (confirm == true) {
    alert("Merci d'être passé nous voir");

} else {
    alert("Merci de rester parmis nous");
}