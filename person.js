class Person {
  constructor(name, dob, age) {
    this.name = name;
    this.dob = dob;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getDob() {
    return this.dob;
  }

  getAge() {
    return this.age;
  }
}

const om = new Person("Om", 1996, 25);
console.log("Name:", om.getName());
console.log("DOB:", om.getDob());
console.log("Age:", om.getAge());
