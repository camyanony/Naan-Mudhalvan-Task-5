const express=require("express");
const mongoose= require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));


mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/ecommerc",{
useNewUrlParser: true, useUnifiedTopology:true
}, (err) =>{
if(err)
{
console.log(err)
}else{
console.log("successfully connected")
}
})
app.listen (3004, () => {
console.log("on port 3004 !!!")
})