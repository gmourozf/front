let element = document.getElementById('chapo');
enteteNiveau1
let element1 = document.getElementById('enteteNiveau1');

document.writeln('element');
document.write(element1);

//ciblage par tag
let element2 = document.getElementsByTagName('p');

document.write(element2[0].textContent);

//ciblage par classe

let element3 = document.getElementsByClassName('ml-2');
document.writeln('<br>');
document.writeln(element3[0]);

//utilisation de querySelector ,  attention on recupère le premier élément
//rencontré

let element4 = document.querySelector('p.ml-2');
document.writeln('<br>');
document.writeln(element4);


// pour récupéré tous les elements qui correspondent onutilise querySelectorAll
let element5 = document.querySelectorAll('.ml-2');
document.writeln('<br>');
document.write(element5);


// manipuler changer les elements

const element6 = document.getElementsByTagName('h1');
document.writeln('<br>');
document.write(element6[0].innerHTML);

//modifier le contenu des éléments

const element7 = document.getElementsByTagName('h1');
element7[0].innerHTML = 'Le contenu de remplacement';
document.writeln('<br>');
document.write(element6[0].innerHTML);


const parent = document.querySelector('.parent');
parent.innerHTML = "<h1>titre de ma page </h1>";

let element8 = document.getElementById('enteteNiveau1');
element8.id = 'entete';

// modifier le style d 'un element

let element9 = document.getElementsByClassName('ml-2');
element9[0].style.color = 'green';
element9[0].style.fontSize = '2em';
element9[0].style.fontFamily = 'Arial';

// Ajouter du contenu a un element attention au "+="
let element10 = document.getElementsByTagName('h1');
element10[0].innerHTML += '<span> /// </span>';

// Ajouter enlever des element

//creation d'un nouvel élément

let element11 = document.createElement('p');



// création d 'un noeud de type texte
let paragraphe = document.createTextNode('je suis  un paragraphe');

// ajout du noeud de type texte dans le paragraphe

element11.appendChild(paragraphe);

// puis on ajoute l 'élément a la page HTML dans le body
// dans ce cas il est ajouté a la fin des balises dans le  body

document.body.appendChild(element11);


// utilisation de la method insertBefore() pour placer
// l'element à un endoit précis.

let paragraphe2 = document.createElement('p');
let texte = document.createTextNode('je suis un nouveau paragraphe');

paragraphe2.appendChild(texte);

// recuperation de l'element  
let avant = document.getElementById('chapo');
avant.insertBefore(paragraphe2, avant.childNodes[0]);



//supprimer un élément du flux dans la page.
let element13 = document.getElementsByTagName('h1');

console.log(element13[0]);

// document.body.removeChild(element13[0]);