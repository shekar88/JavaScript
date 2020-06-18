// functional representing object
// let mobile = {
//     brand : 'Apple',
//     price : 5000,
//     color : 'black'
// }
// console.log(mobile)

//Creating class
class Mobile {
    // this constructor is responsible to initialize your object
    constructor(brand_p, price_p, color_p) {
        this.brand = brand_p;
        this.price = price_p;
        this.color = color_p;
    }

    getBrand() {
        return this.brand;
    }
    setBrand(p_brand) {
        this.brand = p_brand;
    }
    getPrice() {
        return this.price;
    }
    setPrice(p_price) {
        this.price = p_price; 
    }
    getColor() {
        return this.color;
    }
    setColor(p_color) {
        this.color = p_color;
    }

    printSpecification() {
        let spec = `Brand : ${this.getBrand()} 
        Price : ${this.getPrice()} 
        Color : ${this.getColor()}`;
        console.log(spec);
    }
}

let mobile = new Mobile('Apple',35000, 'silver');
mobile.printSpecification();
mobile.setPrice(45000);
mobile.printSpecification();