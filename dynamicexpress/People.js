const Person = require("./Person.js");
let faker = require("faker");

class People {

    constructor() {
        
        this.people = [];

        for(let i = 0; i < 99; i++) 
        {
            let name = faker.name.findName();
            let color = faker.commerce.color();
            this.people.push(new Person(name, color));
        }

    }

    readColor(req) {

        let result = {"error": "could not find!"};

        this.people.forEach((value) => {
        if(value.color == req.params.color) {
            result = value;
        }
    });
    
    if(result.error) {
        //in red
        console.log(req.path);
    } else {
        //in green
        console.log(req.path);
    }

    return result;
    }
    readName(req) {

        let result = {"error": "could not find!"};

        this.people.forEach((value) => {
        if(value.name == req.params.name) {
            result = value;
        }
    });
    
    if(result.error) {
        //in red
        console.log(req.path);
    } else {
        //in green
        console.log(req.path);
    }

    return result;
    }
    
}

module.exports = People;