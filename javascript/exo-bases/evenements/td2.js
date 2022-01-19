// let button =document.querySelector("input[type='button']");

// let intervalId

// function start(){
// intervalId = setInterval(decompte,5000)


// }


// function decompte(){
//     let seconde = 10;
//     while (seconde!=0){
        
//       console.log( "il reste "+ seconde + " seconds") 
//       document.body.innerHTML = "il reste "+ seconde + " seconds";
//       seconde -= 1;
//     }
//     stop();
// }


// function stop() {
//     clearInterval(intervalId);
//     } 

// button.addEventListener('click',start());    

let button =document.querySelector("input[type='button']");
let secondes = 10;
let interval;

button.addEventListener('click', start);

function start(){
    //on appelle la fonction toutes les secondes
    interval = setInterval(decompte, 1000)
}

function stop(){
    clearInterval(interval);
    document.body.innerHTML += "stop";
}

function decompte(){
    secondes--;
    if (secondes==0){
        stop();
    } else{
        document.body.innerHTML += secondes + "<br>";
    }
}