import { participants } from "./ajouter.js";
import { statistique } from "./statistique.js";
import { sauvegarder } from "./storage.js";
export function supprimer(bloc){
    const id = Number(bloc.dataset.id) ;

    const index = participants.findIndex(el => el.id === id);

    if(index !== -1) participants.splice(index , 1);

    bloc.remove();
    sauvegarder();
    statistique();

}

export function supprimerCocher(){
    const coches = document.querySelectorAll('.liste .divis input[type="checkbox"]:checked');

    coches.forEach(checkbox =>{
        const bloc = checkbox.closest('.divis');
        const id = Number(bloc.dataset.id);
        const index = participants.findIndex(el => el.id === id);

        if(index !== -1) participants.splice(index , 1);
        bloc.remove();
    })
    sauvegarder();
    statistique();
}