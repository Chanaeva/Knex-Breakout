var database = require("./database_connection");

database("cat").insert({
  name: "Elyse",
  age: 33
}).then(function myCats(cats){
  req.sendStatus(201);
});
