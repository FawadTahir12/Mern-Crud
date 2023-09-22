const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/testdatabase",).then(()=>{
    console.log("connection to the database is established");
}).catch((e)=>{
    console.log(`Error connecting to databse: ${e}`);
})
