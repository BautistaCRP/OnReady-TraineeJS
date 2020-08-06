const Vehicle = require('./vehicle');


class Motorcycle extends Vehicle {

    constructor(brand, model, price, displacement){
        super(brand, model, price);
        this.displacement = displacement;
    }

    
    toString(){
        let out = new String('');
        return out.concat('Marca: ').concat(this.brand)
            .concat(' // Modelo: ').concat(this.model)
            .concat(' // Cilindrada: ').concat(this.displacement).concat('c')
            .concat(' // Precio: $').concat(this.price);
    }

}


module.exports = Motorcycle;