class Triangle {
    constructor(height,base) {
        this.name = 'triangle';
        this.height = height;
        this.base = base;
    }

    getArea() {
        return (.5 * (base * height));
    }

}

var eqTriangle = new Triangle(4,4);

console.log(eqTriangle, getArea);