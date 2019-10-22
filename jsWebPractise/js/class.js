class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }

    get cnam() {
        return this.carname;
    }

    set cnam(x) {
        this.carname = x;
    }

    get cmol() {
        return this.model;
    }

    set cmol(x) {
        this.model = x;
    }

    show() {
      return this.present() + ', it is a ' + this.cmol;
    }
  }
  
  function showCar(){
    mycar = new Model("Ford", "Mustang");
    var res = "default";
    res = mycar.show();

    //window.alert(res);
    document.getElementById("6p1").innerHTML = mycar.show();
  }
  