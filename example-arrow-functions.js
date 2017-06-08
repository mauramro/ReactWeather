var names = ["Mauricio", "Lau", "Ale"];

// names.forEach(function(name){
//   console.log(name);
// });
//
// names.forEach((name) => {
//   console.log(name + " last");
// });
//
// names.forEach(name => console.log(name));
//
//
// var person = {
//   name: "Man",
//   greet: function(){
//     console.log(this.name);
//     names.forEach((name) => console.log(this.name, name));
//   }
// }
//
// person.greet();

var addExpression = (a, b) => a + b;

var addStatement = (a, b) => {
  return a + b;
};

console.log(addExpression(2,4));
console.log(addStatement(1,4));
