export const participants = [];
const container = document.querySelector('.liste');


export function ajouterElement(participant){

    container.insertAdjacentHTML('beforeend', `
        <div class="divis" data-id="${participant.id}">
            <input type="checkbox">
            <div>
                <p class="name">${participant.nom}</p>
                <p>${participant.email}</p>
            </div>
            <p class="for">${participant.formation}</p>
            <button type="button" class="btn-supprimer">Supprimer</button>
        </div>
    `);
}

