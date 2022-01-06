let personne = {
    sexe: "feminin",
    age: 12,
    ville: "Saint-Etienne",
};



// si la personne a 65  ou plus > catégorie= personne agée   => tarif = gratuit

// si la personne a moins  de 18  catégorie= L’adolescent(e)  => tarif = 30 % de réduction

//  si la ville est lyon   ville = lyon
//  si la ville est Paris   ville = Paris

// si la ville est Saint-Eteinne ou Grenoble     ville =  Saint-Etienne ou de Grenoble est 





function transport(usager) {
    let age = usager.age;
    let ville = usager.ville;
    let sexe = "de sexe " + usager.sexe + " ";
    let tarif = "";
    let ville_message;
    let message = "";
    let message_ko = "";
    let categorie = "";

    switch (ville) {
        case 'Paris':
            ville_message = `de ${ville} `;
            break;
        case 'Lyon':
            ville_message = `de ${ville} `;
            break;
        case 'Saint-Etienne':
            ville_message = 'de Saint-Etienne ou de Grenoble est ';
            break;
        case 'Grenoble':
            ville_message = 'de Saint-Etienne ou de Grenoble est ';
            break;

        default:
            message_ko = "Nous ne desservons pas ces villes";
            break;
    }

    if (message_ko != "") {
        return console.log(message_ko);
    }

    categorie = (age >= 65) ? "personne âgée " : "L’adolescent(e)";
    tarif = (age >= 65) ? "transport gratuit" : `30% de reduction`;
    message = categorie + ville_message + sexe + tarif;
    return console.log(message);
}

transport(personne);