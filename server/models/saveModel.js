const mongoose = require("mongoose");

const saveSchema = {
    title: Number
}

const Save = mongoose.model("Save", saveSchema);

module.exports = Save;