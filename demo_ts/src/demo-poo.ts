class Vehicule {

    // Proriété label :
    // - Soit nullable et donc optionnel (label?)
    // - Soit valeur par défaut donc pas besoin d'être dans le constructeur -> label : String = "Valeur"
    // - On fait: Soit déclarer mais doit obligatoirement être initialisé dans le constructeur
    public label: String;

    constructor(label: String){
        this.label = label;
    }
}

class Voiture extends Vehicule {

    rouler() {
       console.log(`Vrooom Vroooooooom !!! Carbo chantilly dans le moteur !`); 
    }
}

// Instancier une voiture
let vroom = new Voiture('Clio 206');

vroom.rouler();