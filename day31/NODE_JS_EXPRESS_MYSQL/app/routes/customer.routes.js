module.exports = (app) => {
    const customers = require("../controllers/customer.controller.js.js");
  
    //create a new customer
    app.post("/customers", customers.create);
    //retrieve all the users
    app.get("/customers", customers.findAll);
    //single user
    app.get("/customers/:customerId", customers.findOne);
    //update the customer with customer id
    app.get("/customers/:customerId", customers.update);
    //delete a customer with customer Id
    app.get("/customers/:customerId", customers.delete);
    //Delete all
    app.get("/customers", customers.deleteAll);
  };