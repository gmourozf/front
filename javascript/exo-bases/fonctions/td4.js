// fonction qui calcule le prix 

function horsTaxe(prixTTC) {
    //  prix ttc = prixHT + 0.2*prixHT => prixHT = ( prixTTC / 1.2 ) 

    return prixTTC / 1.2;

}

let monPrixTTC;
horsTaxe(monPrixTTC);