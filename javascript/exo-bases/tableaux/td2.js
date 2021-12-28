let pays = [
    ['Paraguay', 'Bresil', 'Argentine', 'Surinam'],
    ['Asuncion', 'Brasília', 'Buenos Aires', 'Paramaribo']
]

pays[0].splice(2, 1);
pays[1].splice(2, 1);

console.log(pays);


pays.push(['Espagnol', 'Portugais', 'Néerlandais']);

//affichage avec la methode concat


console.log("".concat('[', pays[0], ']', '\n', '[', pays[1], ']', '\n', '[', pays[2], ']'));