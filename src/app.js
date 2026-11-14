import { validerEmail } from "./validation.js";

const form = document.getElementById('form');
const email = document.getElementById('email');
const msgErreur = document.getElementById('msg-erreur');

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    if(!validerEmail(email.value.trim())){
        msgErreur.textContent = "Veuillez entrer une bonne forme d email";
        msgErreur.style.color = "red";
        return;
    }
    msgErreur.textContent = "";
})