let elementH1 = document.querySelector("h1");
//ajout du style 
elementH1.style.backgroundColor='purple';
elementH1.style.color='white';


const cercle = document.querySelector('.cercle');
const carre = document.querySelector('.carre');

cercle.addEventListener("onmouse",()=>{
    cercle.style.backgroundColor = 'llightgreen';
});

carre.addEventListener("click",()=>{
    carre.style.backgroundColor="crimson";
});



document.addEventListener("click",(e)=>{
   
   console.log( ` position x = ${e.clientX} et position y : ${e.clientY}`);
       
    
}) ;  

