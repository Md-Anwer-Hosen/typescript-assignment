Type Narrowing in TypeScript :

Introduction :

Type Narrowing is an important feature of TypeScript that helps developers work safely with different types of values. It allows TypeScript to identify the specific type of a variable inside a condition. This helps prevent type-related errors and makes code more reliable.

Detailed Explanation :

TypeScript provides several ways to narrow types. Three common methods are (typeof), (instanceof), and the (in) operator.

1. Using typeof -->

The "typeof" operator checks the type of a variable. It is commonly used with union types.


Example : 

function processInput(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value * 2);
  }
}


 2. Using instanceof :

The "instanceof" operator checks whether an object belongs to a particular class.

Example : 

class Dog {}

const pet = new Dog();

if (pet instanceof Dog) {
  console.log("This is a Dog");
}


 3. Using the in Operator -->

The "in" operator checks whether a property exists in an object.

Example : 

type Admin = { role: string };
type User = { email: string };

function checkUser(person: Admin | User): void {
  if ("role" in person) {
    console.log(person.role);
  } else {
    console.log(person.email);
  }
}


Conclusion :

Type Narrowing makes TypeScript code safer and easier to understand. By using "typeof", "instanceof", and the "in" operator, developers can handle different data types correctly and reduce runtime errors.