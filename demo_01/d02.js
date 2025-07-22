// Scope / Portée (Contexte d'utilisation/d'existence)
// 1. Déclarer scope globale "plat"
let plat = "Crevette Nutella"

// 2. Afficher
console.log(plat)

// 3. Déclarer une méthode qui utilise "plat" (contexte globale)
function platGlobal(){
    plat = "Riz Carbo"
}

// 4. Appel la fonction
platGlobal()

// 5. re affiche
console.log(plat)