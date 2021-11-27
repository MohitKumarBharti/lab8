var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");

function person(firstName, lastName, officeAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.officeAddress = officeAddress;
}

var person1 = new person("Ram", "Kumar", "Patna");
var person2 = new person("Shyam", "Kumar", "Delhi");
var person3 = new person("Mohan", "Singh", "Mumbai");

console.log(person1);
console.log(person2);
console.log(person3);

var str = "";
str = "\n Person1 => \n" + "firstName : " + person1.firstName;
str += " , lastName : " + person1.lastName;
str += " , officeAddress : " + person1.officeAddress;
ans1.innerHTML = str;
str = "";
str = "\n Person2 =>  \n" + "firstName : " + person2.firstName;
str += " , lastName : " + person2.lastName;
str += " , officeAddress : " + person2.officeAddress;
ans2.innerHTML = str;
str = "";
str = "\n Person3 =>  \n" + "firstName : " + person3.firstName;
str += " , lastName : " + person3.lastName;
str += " , officeAddress : " + person3.officeAddress;
ans3.innerHTML = str;
