const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.phdmu.mongodb.net/saveDB")

app.use("/", require("./routes/saveRoute"));

app.listen(3005, function(){
    console.log("express server is running on port 3002");
})
