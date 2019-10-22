var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

person.age = 18;

console.log(person.age);
console.log(person.fullName());
