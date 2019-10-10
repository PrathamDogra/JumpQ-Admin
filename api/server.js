const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors')
const app = express();
const path =require('path');
require('dotenv').config();
//As body-parser is inside the express
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true })
  .then(() =>
    console.log("The connection to MongoDB is established successfully")
  )
  .catch(err => console.log(err));
const productRoute = require('./routes/products');
const storeRoute = require('./routes/store');
app.use("/product", productRoute);
app.use("/store", storeRoute);

app.get("/app", (req, res) => {
  res.status(200).json("Hello World");
});

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('build'));
//   app.get('*',(req,res) =>{
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   })
// }


port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running at ${port}`));
