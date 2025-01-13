require("dotenv").config()
const express = require('express');
const products_routes = require('./routes/product');
const connectDB = require("./DB/connect");

const app = express()

const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
  res.send("hi I am LIVe")
})

app.use("/api/products",products_routes)


const start = async() =>{
    try {
      await connectDB(process.env.MONGODB_URL)
         app.listen(PORT ,()=>{
            console.log(`Server started at ${PORT}`);
            
         })
    } catch (error) {
        console.log(error);
        
    }
}

start()