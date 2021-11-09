class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getColor() {
    if (this.color !== undefined) {
      return this.color;
    } 
  }

  getCircumference() {
    return 2 * Math.PI * this.radius; 
  }
}

const obj1 = new Circle(10.00);
console.log(obj1.getArea());
console.log(obj1.getCircumference());

const obj2 = new Circle(10.00, "red");
console.log(obj2.getRadius + " | " + obj2.getColor());