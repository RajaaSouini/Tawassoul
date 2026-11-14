import { validerEmail } from "./validation.js";
import { validerNom } from "./validation.js";
const form = document.getElementById('form');
const email = document.getElementById('email');
const msgErreur = document.getElementById('msg-erreur');
const nom = document.getElementById('nom');
const msgErreurNom = document.getElementById('msg-erreur-nom');

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    msgErreur.textContent = "";
    msgErreurNom.textContent = "";
    let valide = true ;

    if(!validerEmail(email.value.trim())){
        msgErreur.textContent = "Veuillez entrer une bonne forme d email";
        msgErreur.style.color = "red";
        valide = false;

    }
    if(!validerNom(nom.value.trim())){
        msgErreurNom.textContent = "Veuillez entrer un nom correcte";
        msgErreurNom.style.color = "red";
        valide = false ;
    }
    if(!valide) return;

})