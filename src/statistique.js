import { participants } from "./ajouter.js";
export function statistique(){
    const totalparticipant = document.getElementById('total-participant');

    totalparticipant.textContent = participants.length ;

    const participantselectionne = document.getElementById('participant-selectionne');
    const tot = document.querySelectorAll('.liste .divis input[type="checkbox"]:checked');

    participantselectionne.textContent = tot.length;
}