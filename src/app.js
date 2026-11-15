import { validerEmail } from "./validation.js";
import { validerNom } from "./validation.js";
import { ajouterElement , participants } from "./ajouter.js";
import { supprimer } from "./supprimer.js";
import { supprimerCocher } from "./supprimer.js";
import { statistique } from "./statistique.js";
import { charger, sauvegarder } from "./storage.js";
import { filter } from "./filter.js";

const form = document.getElementById('form');
const email = document.getElementById('email');
const msgErreur = document.getElementById('msg-erreur');
const nom = document.getElementById('nom');
const msgErreurNom = document.getElementById('msg-erreur-nom');
const formation = document.getElementById('formation');
const list = document.getElementById('liste');
const supprimerTout = document.getElementById('supprimer-selection');
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

    const newPartcipant = {
        id : Date.now() ,
        nom : nom.value ,
        email : email.value ,
        formation : formation.value ,
    }

    participants.push(newPartcipant);
    ajouterElement(newPartcipant) ; 
    sauvegarder();
    filter();
    statistique();
    form.reset(); 


})

list.addEventListener('click' , function(e){
        if(!e.target.classList.contains('btn-supprimer')) return;
        supprimer(e.target.closest('.divis'));
})

supprimerTout.addEventListener('click' , supprimerCocher);
charger();
statistique();


list.addEventListener('change', (e) => {        
    if (e.target.type === 'checkbox') statistique();
});






