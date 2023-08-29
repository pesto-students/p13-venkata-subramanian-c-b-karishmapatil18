//Section 1 - Inheritance:
class vehicle{
    constructor(make, model, year, color){
        this.make = make;
        this.model= model;
        this.color= color;
        this.year = year;
    }

    drive(){
        return "Driving "+ this.make+" " + this.model
    }
}

class car extends vehicle{
    constructor(make, model, year, color,numSeats){
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

class RideShareCar extends car{
    constructor(make, model, year, color,numSeats,isAvailable){
        super(make, model, year, color,numSeats);
        this.isAvailable = isAvailable;
    }
}

let obj1 = new RideShareCar("honda","ES6",1990,"WHITE",2,"YES")

console.log(obj1.drive())

/*------------------------------------------------------------------------------*/
//Section 2 - Polymorphism:

class shape{

    calculateArea(){

    }
}

class Rectangle extends shape{
    constructor(width,height)
    {   
        super();
        this.width=width;
        this.height= height;
    }
    calculateArea(){
        return this.width * this.height ;
    }
}

class Triangle extends shape{
    constructor(base,height)
    {   
        super();
        this.base=base;
        this.height= height;
    }
    calculateArea(){
        return  (this.base * this.height) / 2;
    }
}

class circle extends shape{
    constructor(radius)
    {
        super();
       this.radius = radius;
    }
    calculateArea(){
        return   3.14 * this.radius * this.radius;
    }
}

let rec = new Rectangle(2,3);
console.log(rec.calculateArea())

let triangle =  new Triangle(6,6)
console.log(triangle.calculateArea())

let circle1= new circle(8)
console.log(circle1.calculateArea())


/*----------------------------------------------------------------------------- */
//Section 3 – Abstraction and encpasulation:

class BankAccount {
    #accountNumber = "";
    #balance = 0;
    #accountHolderName = "";
  
    constructor(accountNumber, balance, accountHolderName) {
      this.#accountNumber = accountNumber;
      this.#balance = balance;
      this.#accountHolderName = accountHolderName;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    get balance() {
      return this.#balance;
    }
  
    withdraw(amount) {
      if (this.#balance - amount < 0) {
        console.log("Withdrawal failed");
        return;
      }
  
      this.#balance -= amount;
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  }
  
  const checkingAccount = new CheckingAccount("5436473826437", 100000, "ABCD");
  const savingsAccount = new SavingsAccount("45637373", 500, "EFGHI");
  
  checkingAccount.deposit(500);
  console.log("Checking account balance: " + checkingAccount.balance);
  
  savingsAccount.deposit(100);
  console.log("Savings account balance: " + savingsAccount.balance);
  
  savingsAccount.withdraw(600);
  console.log("Savings account balance: " + savingsAccount.balance);
