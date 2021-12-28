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




// Exo permuter la valeur de deux variables.

let nom = 'Lana';
let prenom = 'del Rey';
let tmp = ''
let message = nom + " " + prenom;

console.log(message);

tmp = nom;
nom = prenom;
prenom = tmp;
message = nom + " " + prenom;

console.log(message);