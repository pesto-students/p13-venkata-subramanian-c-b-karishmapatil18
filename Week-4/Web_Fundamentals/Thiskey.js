class Person
{
   constructor(name,age,gender,nationality)
   {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
   }

   introduce()
   {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Nationality: ${this.nationality} `;
   }

}

class student extends Person 
{
    constructor(name,age,gender,nationality,subject)
    {
        super(name,age,gender,nationality)
        this.subject = subject;

    }

    study() {
        return `Subject: ${this.subject}`;
      }
}

let Person1 = new Person("John",25 , " male"," American");
let Person2 = new Person(" Jane", 30  ," female","Canadian.");
let Person3 = new Person("Bob",20 , "male","Australian."); 

console.log(Person1.introduce())
console.log(Person2.introduce())
console.log(Person3.introduce())


let Student = new student("John",25 , " male"," American","physich");

console.log(Student.introduce()+ Student.study());





