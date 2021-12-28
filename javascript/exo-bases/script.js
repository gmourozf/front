var express = require('express')

let nb1 = 0;
nb1 = 12 * 5;
nb1 = 20 * 5;
nb1 = 2 ** 3;
"Marceline";
let nom = "Des jkljiuo";
let auteur = Prenom + nom;
console.log(auteur);

console.log("L'auteur du livre : %s", auteur);

console.log("Le nom de Marceline est %s.", nom);
const firstname = 'alf';
console.log(`je me nomme ${firstname}`);

const latitude = 45.764043;
const longitude = 4.835659;
const emplacement = `Lyon${latitude}${longitude}`;

console.log(Boolean(20));
console.log(Boolean("Albert"));

let slam = `La fourmi ayant trimé tant d’années
Se trouva fort dépourvue la vieillesse venue
Pas un seul petit morceau de romance ou de tango
Tristement elle s’achemine chez sa fourmi la voisine`;
let position = slam.indexOf('romance');
console.log(position);

// concatener avec la fonctiont concat
const lover1 = `Roméo`;
const lover2 = `Juliette`;
let loving = lover1.concat(' & ', lover2);
console.log(loving);

console.log(`c'est sur plusieurs
ligne ${lover1}`);


//conversion de type

const nombre = 10;
const nombreChaine = "10";
console.log(`la variable chiffre est de type ` + typeof(nombre) + ' et a pour valeur ' + nombre);
console.log(`la variable chiffre est de type ` + typeof(nombreChaine) + ' et a pour valeur ' + nombreChaine);

//convertion de type avec  les fonction string number boolean

const nombre1 = 12;
const nombreChaine1 = String(nombre1);
console.log('La variable chiffre est de type ' + typeof(nombreChaine1) + ' et a pour valeur ' + nombreChaine1);

const cent = "100";
const centEnChiffre = Number(cent);
console.log('la variable chiffe est de type ' + typeof(centEnChiffre) + 'et a pour valeur ' + centEnChiffre);

console.log(Boolean('ttte'));
console.log(Boolean(0));

const salutation = 'bonjour';
console.log(salutation.length);