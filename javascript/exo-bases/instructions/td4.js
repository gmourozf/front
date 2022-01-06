let annee = 2021;
let mois = 02;
let jours;
let nomMois;

switch (mois) {
    case 01:
        jours = 31;
        nomMois = "Janvier";
        break;
    case 02:
        jours = 28;
        nomMois = "Fevrier";

        break;
    case 03:
        jours = 31;
        nomMois = "Mars";
        break;

    case 04:
        jours = 30;
        nomMois = "Avril";

        break;
    case 05:
        jours = 31;
        nomMois = "Mai";

        break;
    case 06:
        jours = 30;
        nomMois = "Juin";
        break;
    case 07:
        jours = 31;
        nomMois = "Juillet";
        break;
    case 08:
        jours = 31;
        nomMois = "Aout";
        break;
    case 09:
        jours = 30;
        nomMois = "Septembre";
        break;
    case 10:
        jours = 31;
        nomMois = "Octobre";
        break;
    case 11:
        jours = 30;
        nomMois = "Novembre";
        break;
    case 12:
        jours = 31;
        nomMois = "Decembre";
        break;

}

console.log(`le mois de ${nomMois} à ${jours} jours`);