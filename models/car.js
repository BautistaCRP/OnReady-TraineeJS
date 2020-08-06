const Vehicle = require('./vehicle');


class Car extends Vehicle {

    constructor(brand, model, price, doors){
        super(brand, model, price);
        this.doors = doors;
    }

    toString(){
        let out = new String('');
        return out.concat('Marca: ').concat(this.brand)
            .concat(' // Modelo: ').concat(this.model)
            .concat(' // Puertas: ').concat(this.doors)
            .concat(' // Precio: $').concat(this.price);
    }
}


module.exports = Car;