class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    speak() {
        console.log(this.name);
        console.log(this.favoriteColor);
    }
}
var person = new Person();

module.exports = Person;