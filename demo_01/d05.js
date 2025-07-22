// La classe Personne
class Person {

    constructor(firstname) {
        this.firstname = firstname
    }
}

// Tableau de 3 personnes
let persons = [
    new Person("Isaac"),
    new Person("Incroyable Bulk"),
    new Person("Velocipastor")
]

// Afficher les 3 personnes du tableau 
persons.forEach(element => {
    console.log(element)
});

// Trouver une personne
let foundPerson = persons.find(person => person.firstname == "Velocipastor")

// Modifier la personne trouvée
foundPerson.firstname = "Pizza Ananas"

// Afficher les 3 personnes du tableau 
console.log("---------------------------------------------")
persons.forEach(element => {
    console.log(element)
});