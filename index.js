console.log("Welcome to the object class.");

// Primitive Data type

// 1. String
// 2. Number
// 3. BigInt
// 3. Undefined
// 4. Null
// 5. Symbol
// 6. Boolean

// Complex Data Type (Object, Array, Date)

// CRUD--- Create, Read, Update, Delete

const school = {
  name: "Prasadi college",
  estd: 2000,
  phone: 1234567890,
  address: "kathmandu",
  isCollege: true,
};

// 1. Create new object called car.

const car = {
  name: "lamborghini",
  manufacture: 1990,
  own: 2002,
  address: "Germany",
  brand: "Luxurious car",
  owner: {
    a: "Ram",
    b: "Shyam",
  },
  age: function () {
    return 2024 - 2012;
  },
  old: () => {
    return 2024 - 2012;
  },
};

// 2. Read

console.log(car.brand, car.owner.a, car.age());

// To call the function of the object, use ().

// 3. Update

car.own = 2005;
car.color = "red";
car.owner.a = "Shraban";
console.log(car);

// 4. Delete

// 1. Delete the object
// 2. Delete the object property

// Use Delete keyword

delete car.owner.b;
delete car.address;
delete car.old;

// Practice question:

const teacher = {
    name:"shraban",
    dob:2000,
    age: function (){
        return 2024-this.dob;
    },
    old: () => {
        return 2024-teacher.dob;
    },
};

console.log(teacher.age());
console.log(teacher.old());


// write a program which can return a boolean if 
// value is present in the range with given start
// and end values in an object.

// Example

const range = {
    start : 10,
    end : 50,
    check: (num) => {
if (num >= range.start && num <= range.end){
    return false;
}
return false;
    },
};

console.log(range.check(10));

// https://github.com/rakimsth/basic-js-exercise

