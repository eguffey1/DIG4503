const Person = require("./Person.js");

class Eric extends Person {
    constructor(name, favoriteColor) {
        super(name, favoriteColor);
    }
}
module.exports = Eric;