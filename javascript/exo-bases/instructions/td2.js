const nom = ["stef", "sophie", "pierre"];
const serie = ["Behind Her Eyes", "L'autre côté", "Lupin", "Into the night"];
let userName = "";
let indexValue = "";


userName = nom[2];



if (userName === "pierre") {

    console.log(`la serie préférée de pierre est ${serie[nom.indexOf('pierre')] }`);


} else if (userName === "stef") {

    console.log(`la serie préférée de stef est ${serie[nom.indexOf('stef')] }`);


}