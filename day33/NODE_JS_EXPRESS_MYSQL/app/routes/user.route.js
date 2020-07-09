module.exports = (app) => {
    const users = require("../controllers/customer.controller.js.js");
  
    //create a new customer
    app.post("/register", users.create);
    //retrieve all the users
    app.get("/register", users.findAll);
    //single user
    app.get("/register/:userId",users.findOne);
    //update the customer with customer id
    app.get("/register/:userId", users.update);
    //delete a customer with customer Id
    app.get("/register/:userId", users.delete);
    //Delete all
    app.get("/register", users.deleteAll);
  };