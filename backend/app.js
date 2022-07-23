const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/bookRoutes');
const app = express();

// Middlewares
app.use(express.json())
app.use("/books", router) 


// Mongoose connection
mongoose.connect("mongodb+srv://admin:admin123@bookstore.4ou7i.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected to the database")
})
.then(()=> {
    app.listen(5000)
})
.catch((err)=>{
    console.log(err)
});


// username: admin
// pass: admin123