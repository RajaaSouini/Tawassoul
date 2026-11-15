import { participants , ajouterElement } from "./ajouter.js";

export function sauvegarder(){
    localStorage.setItem('participant' , JSON.stringify(participants));
}

export function charger(){
    const donnees = localStorage.getItem('participant');

    if(!donnees) return ;

    const liste = JSON.parse(donnees);
    participants.push(...liste);
    liste.forEach(element => {
        ajouterElement(element)
    });
}