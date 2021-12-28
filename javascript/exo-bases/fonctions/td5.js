// fonction qui calcule le prix 

function horsTaxe(prixTTC) {
    //  prix ttc = prixHT + 0.2*prixHT => prixHT = ( prixTTC / 1.2 ) 

    return prixTTC / 1.2;

}

let monPrixTTC = 20;
console.log("le prix hors yaxe est : " + horsTaxe(monPrixTTC) + " euros");





let monTableau2D = [
        ['Barcelone', 'Annecy', 'Abbeville'],
        ['Catalogne', 'Savoie', 'Picardie']
    ]
    //monTableau2D.splice(0,0);
monTableau2D.splice(0, 1);


console.log(monTableau2D);