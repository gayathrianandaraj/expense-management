const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Wish = require("./models/wishModel");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.phdmu.mongodb.net/wishDB")

app.use("/", require("./routes/wishRoute"));

app.delete('http://localhost:3001/delete/:id', function(req, res){
    const id = req.params.id;
    Wish.findByIdAndDelete({_id: id}, function(err){
        if(!err){
            console.log("item deleted");
        }
        else{
            console.log(err);
        }
    })
})

app.listen(3001, function(){
    console.log("express server is running on port 3001");
})
