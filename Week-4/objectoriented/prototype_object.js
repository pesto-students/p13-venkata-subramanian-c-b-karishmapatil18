// Section 1 : Protecting the Object
const person =
 {
    Name: "QWER",
    Age: 22,
    Email: "wert@gmail.com",
  
    getAge()
     {
      return this.Age;
    },
  
    setAge(age) 
    {
      if (age >= 0 && age <= 120) {
        this.Age = age;
      } else {
        console.log("Invalid age");
      }
    },
  };
  
  Object.defineProperty(person, "name", {
    get() {
      return this.Name;
    },
  });
  
  Object.defineProperty(person, "email", {
    get() {
      return this.Email;
    },
  });
  
  Object.defineProperty(person, "age", {
    set(age) {
      this.setAge(age);
    },
  });
  
  console.log(person.email);
  console.log(person.name);
  person.age = 25; 
  console.log(person.getAge());
  
  
  class Vehicle 
  {
    constructor(make, model, year)
     {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDetails()
     {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  class Car extends Vehicle
   {
    constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    getDetails() 
    {
      return `${super.getDetails()}, ${this.numDoors} doors`;
    }
  }
  
  const vehicleInstance = new Vehicle("ABCD", "EFGH", 2000);
  const carInstance = new Car("GHJK", "EWRT", 1999, 3);
  
  
  console.log(vehicleInstance.getDetails());
  console.log(carInstance.getDetails());