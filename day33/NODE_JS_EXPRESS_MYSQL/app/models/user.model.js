const sql = require("./db.js");
const User=function(user){
    this.email=user.email;
    this.U_password=user.u_password;
    this.phonenumber=user.phonenumber;
    this.address=user.address;
};
User.create=(newUser,result) => {
    sql.query('insert into user_registration set ?',newUser,(err,res) => {
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log('created user:',{id:res.insertedId,...newUser});
        return(null,{id:res.insertedId,...newUser});
    });
};