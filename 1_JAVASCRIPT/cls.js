const createPeople = function() {
  class Person {
    constructor(name) {
      this._name = name;
    }
    get getName() {
      return this._name;
    }
    set setName(newName) {
      this._name = newName;
    }
  }
  return Person;
}
const Person = createPeople();
const arnold = new Person("Arnold");
arnold.setName = "Patric"
console.log(arnold.getName);

export { createPeople };
