/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
 */

// Code:

class Person {
  constructor(firstAndLast) {
    this.fullName = firstAndLast;
  }

  getFirstName() {
    return this.fullName.split(' ')[0];
  }

  getLastName() {
    return this.fullName.split(' ')[1];
  }

  getFullName() {
    return this.fullName;
  }

  setFirstName(name) {
    this.fullName = `${name} ${this.fullName.split(' ')[1]}`;
  }

  setLastName(name) {
    this.fullName = `${this.fullName.split(' ')[0]} ${name}`;
  }

  setFullName(name) {
    this.fullName = name;
  }
}

const bob = new Person('Bob Ross');
