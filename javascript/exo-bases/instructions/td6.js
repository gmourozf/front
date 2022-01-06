let lePrix = 220;
let nouveauPrix = 0;
let explication = '';


let urgent = false;

function pannier(prix, isurgent) {


    if (prix < 100 && isurgent == false) {
        prix += 7;
        explication = `7 euros d'expedition`
    } else if (prix > 100 && prix <= 150) {
        prix -= 10;
    } else if (prix > 150 && prix <= 200) {
        prix -= 15;
    } else if (prix > 200) {
        prix -= 20;
    }

    if (isurgent) {
        explication = 'livraison express 20 euros';
        prix += 20
    }
    console.log(`Le montant à payer est de ${prix} euros`);
    if (explication != '') {
        console.log(explication);
    }
}

pannier(lePrix, urgent);