/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

console.log("ciao");
//creazione array
const invitati=["gianni@mail.com","giggi@nomail.com","andrei@mail.com","davide@gmail.com"];

const user=document.querySelector("input");
const mybutton=document.querySelector("button");
const choice=document.querySelector("check");

mybutton.addEventListener('click',
    function(){
        for(let i = 0; i < invitati.length; i++){
            console.log(invitati[i]);
/*             if (user == invitati[0] || user == invitati[1] || user == invitati[2] || user == invitati[3]) {
                document.getElementsByClassName("check").innerHTML = "Ci sei" +i;
            } */
        }
    }
);