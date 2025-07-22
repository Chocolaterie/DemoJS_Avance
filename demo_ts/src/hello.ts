console.log(`Bière Nutella`);

interface IDAO {
    selectAll() : any;
}

class Person implements IDAO {
    
    selectAll() {
        throw new Error("Method not implemented.");
    }
}