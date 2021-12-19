var express = require('express')

console.log("hello");
console.log("bonjour");

let Prenom = "Marceline";
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