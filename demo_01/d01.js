class Person {

    constructor(firstname) {
        this.firstname = firstname
    }

    display() {
        console.log(`Je m'appelle ${this.firstname}`)
    }
}

// let = variable (peut changer la valeur) | const = constante (lecteur seule)
// Instancier deux personnes
let isaac = new Person("Isaac")
let denver = new Person("Le dernier dinosaure")

// afficher
isaac.display()
denver.display()

// -------------------------------------------------------------
// Etape 2 
// -------------------------------------------------------------
isaac = denver

// afficher
console.log('                                                         ')
console.log('---------------------------------------------------------')
console.log('                                                         ')

isaac.display()
denver.display()

// -------------------------------------------------------------
// Etape 3
// -------------------------------------------------------------
isaac.firstname = "Sharknado"

// afficher
console.log('                                                         ')
console.log('---------------------------------------------------------')
console.log('                                                         ')

isaac.display()
denver.display()