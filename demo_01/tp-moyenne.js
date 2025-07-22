class Subject {

    constructor(libelle, notes){
        this.libelle = libelle;
        this.notes = notes;
    }

    calculAverage() {
        // La somme des notes
        let sum = 0;
        this.notes.forEach(note => {
            sum += note;
        });

        // Diviser la somme par le nombre de notes
        let average = sum / this.notes.length

        // Retourner la moyenne
        return average;
    }
}

// Je vais avoir 3 matières à la volée
let subjects = [
    new Subject("Francais", [12, 8, 13, 6]),
    new Subject("Math", [4, 9, 16, 18]),
    new Subject("Sport", [15, 13, 17, 2, 6])
]

// Calculer la somme des moyennes
let sumAverage = 0;

// -- dans chaque matière
subjects.forEach(subject => {
    // -- additionner le résultat de calculAverage dans sumAverage
    let subjectAverage = subject.calculAverage();
    console.log(`La moyenne de ${subject.libelle} est de : ${subjectAverage}`)
    
    sumAverage += subjectAverage;
});

// Divier la somme des moyennes / le nombre de matières
let averageGeneral = sumAverage / subjects.length

console.log(`La moyenne générale est de ${averageGeneral}`)