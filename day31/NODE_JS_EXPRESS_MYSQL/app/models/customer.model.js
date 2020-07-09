const sql = require("./db.js");

const Customer = function (customer) {
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
};

Customer.create = (newCustomer, result) => {
  sql.query("insert into customers set ?", newCustomer, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log("Created Customer : ", { id: res.insertedId, ...newCustomer });
    return null, { id: res.insertedId, ...newCustomer };
  });
};

Customer.findById = (customerId, result) => {
  `select * from customers where Id = ${customerId}`  , (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Found Customer:", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  };
};

Customer.getAll = (result) => {
  sql.query("select * from customers", (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log("Customers : ", res);
    result(null, res);
  });
};

Customer.updateById = (id, customer, result) => {
  sql.query(
    "update customers set email = ?, name = ?, active = ? where id = ?",
    [customer, email, customer.name, customeractive, id],
    (err, res) => {
      if (err) {
        console.log(err);
        result(null, res);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "Not_Found" }, null);
        return;
      }
      console.log("Updated Customer : ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

Customer.remove = (id, result) => {
  sql.query("delete from customers where id = ?", id, (err, res) => {
    if (err) {
      console.log(err);
      result(null, res);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "Not_Found" }, null);
      return;
    }
    console.log("Deleted Csutomer with Id : ", id);
    result(null, res);
  });
};

Customer.removeAll = (result) => {
  sql.query("delete from customers", (err, res) => {
    if (err) {
      console.log(err);
      result(null, res);
      return;
    }
    console.log("Deleted ${res.affectedRows} Customers");
    result(null, res);
  });
};

module.exports = Customer;