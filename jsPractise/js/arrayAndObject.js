var person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue",
    fullname : function() {
        return this.firstName + this.lastName;
    }
};

var cars = ["Saab","Volvo","BMW"];

function showArray(){
    var res = "";
    for (i = 0; i < cars.length; i++){
        res += cars[i] += " ";
    }
    res += "\n";
    
    document.getElementById("4p1").innerText = res;

}

function showObject(){
    var res = "first name: " + person.firstName + "\n" +
                "lastname: " + person.lastName + "\n" +
                "age: " + person.age + "\n" +
                "eye color: " + person.eyeColor + "\n" +
                "full name by function: " + person.fullname();
    document.getElementById("4p2").innerText = res;
}