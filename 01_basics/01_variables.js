const accountId = 144553
let accountEmail = "sanket@gmail.com"
var accountPassword = "160700"
accountCity = "Chandrapur"

// accountId = 2

accountEmail = "rahul@gmail.com"
accountPassword= "55246556"
accountCity = "Nagpur"
console.log(accountId);


/* 
prefer not to use var because of issue in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity])