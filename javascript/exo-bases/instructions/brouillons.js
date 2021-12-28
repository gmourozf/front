// if
let a = 5,
    b = 8;

if (b > a) {
    console.log('b est plus grand que a')
};

// if .. else 


let c = 5,
    d = 8;

if (d > c) {
    console.log('d est plus grand que c');
} else {
    console.log('c est plus grand que d');

}


// if .. else if else pour fair plusieur tests consecutifs et gerer  un cas non prévu

const nb = 100;

if (nb === 50) {
    console.log("Nombre égale a 50");

} else if (nb > 50) {
    console.log('Nombre superieur à 50');
} else if (nb > 75) {
    console.log('Nombre superieur à 75');

} else {
    console.log('résultat imprevue');

}


let hamburger = 0;
hamburger = !hamburger;
console.log("valeur booléen de hamburger " + hamburger);

// ternaires

let prix = 300;
let choix = prix > 200 ? "Premium" : "Basique";
console.log(choix);

//le switch

let couleur = 'bleu';
switch (couleur) {
    case 'rouge':
        console.log("orguille, nouveauté, efficacité, gain");

        break;

    case 'vert':
        console.log("confort, commodité, formation, gain");


    default:
        console.log("non prévu");
        break;
}