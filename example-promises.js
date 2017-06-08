// function getTempPromise (location) {
//   return new Promise(function(resolve, reject){
//     if(location == undefined || location == '' || typeof location == "number"){
//       reject('City not found');
//     } else {
//       resolve(90);
//     }
//
//   });
// }
//
// getTempPromise("Calle blancos").then(function(temp){
//   console.log("Promise success", temp);
// }, function(err){
//   console.log("Promise error", err);
// });


function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if((typeof a !== "number" || typeof b !== "number") || (a == undefined || b == undefined)){
        reject("Not a number");
    } else {
      resolve( a + b);
    }
  });
}

addPromise(2, 5).then(function(total){
  console.log("Total: " + total);
}, function(err){
  console.log("Not a number", err);
});

addPromise(2, "test").then(function(total){
  console.log("Total: " + total);
}, function(err){
  console.log("Not a number on second promise", err);
});

addPromise(2).then(function(total){
  console.log("Total: " + total);
}, function(err){
  console.log("Not a number on third promise", err);
});
