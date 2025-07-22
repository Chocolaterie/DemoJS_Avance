let firstnames = ['Isaac', 'Pierrick', 'Teletubies']

// Exemple find (retourne la reference de l'objet)
let elementTrouve = firstnames.find(elementDuTableau => elementDuTableau == 'Isaac')

// Pseudo code
/*
const elementTrouve = firstname.find(
    uneFonctionLambda(value) 
    { 
        return value == 'Isaac';
    }
);
*/

console.log(elementTrouve)