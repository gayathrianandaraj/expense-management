const mongoose = require("mongoose");

const wishSchema = {
    title: String
}

const Wish = mongoose.model("Wish", wishSchema);

module.exports = Wish;