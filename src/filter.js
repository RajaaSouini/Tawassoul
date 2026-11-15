import { participants } from "./ajouter.js";

const champRecherche = document.getElementById('rechercher');

const boutons = document.querySelectorAll('.btn-filter');
let formationChoisie = 'Tout';

export function filter(){
    const text = champRecherche.value.trim().toLowerCase();
    const participantsAffiche = document.querySelectorAll('.divis');
    participantsAffiche.forEach(function (bloc){
        const nom = bloc.querySelector('.name').textContent.toLocaleLowerCase();
        const formation = bloc.querySelector('.for').textContent ;

        const nomOk = nom.includes(text);

        let formationOk = false;
        if(formationChoisie === 'tout'){
            formationOk = true;
        }else if(formation === formationChoisie ){
            formationOk = true;
        }

        if(nomOk && formationOk){
            bloc.style.display = '' ;
        }else{
            bloc.style.display = 'none';
        }
    })

}

champRecherche.addEventListener('input' , filter);

boutons.forEach(function (btn) {
    btn.addEventListener('click' , function(){
        formationChoisie = btn.dataset.formation ;
        
        filter();
    })
})


