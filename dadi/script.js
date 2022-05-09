/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

const bottone=document.querySelector("button");
const rsfinale=document.querySelector(".risultato-finale");
const puntopersona=document.querySelector(".puntopersona");
const puntopc=document.querySelector(".puntopc");

bottone.addEventListener('click',
    function(){
        let giocatore1 = Math.floor(Math.random() * 6) + 1;
        console.log("persona " +giocatore1);
        puntopersona.innerHTML = "punteggio player: " +giocatore1;

        let giocatore2 = Math.floor(Math.random() * 6) + 1;
        console.log("pc " +giocatore2);
        puntopc.innerHTML = "punteggio pc: " +giocatore2;


        if (giocatore1 > giocatore2) {
            console.log("La persona vince");
            rsfinale.innerHTML = "player vince con: " +giocatore1;
        } else if(giocatore1 < giocatore2){
            console.log("Il pc vince ");
            rsfinale.innerHTML = "il pc vince con: " +giocatore2;
        } else{
            console.log("parità");
            rsfinale.innerHTML = "parità: " +giocatore1 +"  "+giocatore2;
        }
    }
);