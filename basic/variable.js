const accountId= 123456
let accountEmail = "Satya101994@gmail.com"
var accountPassword = "Satya@123"
accountCity = "Odisha"
let accountState;

// {} -> this is scope

// accountId = 2 // not allowed
accountEmail = "Kunal101994@gmail.com"
accountPassword = "Kunal@123"
accountCity = "Maharashtra"

/* 

PREFER not to use war because issue in blok scope & functional scope


*/

// console.log("Account ID:", accountId)
console.table([accountEmail, accountPassword, accountCity, accountState
])