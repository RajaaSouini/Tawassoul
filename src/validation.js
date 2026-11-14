
export function validerEmail(email){
    const regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email.trim());
}

export function validerNom(nom){
    const regex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
    return regex.test(nom.trim());
}