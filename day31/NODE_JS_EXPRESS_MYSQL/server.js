const express = require('express');
const bodyparser = require('body-parser');

const app = express();
//Content-type : application/json
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({message:'Welcome to Dhyanahita'});
});

require('./app/routes/user.route.js')(app);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});