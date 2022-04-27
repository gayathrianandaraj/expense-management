const express = require("express");
const router = express.Router();
const Wish = require("../models/wishModel");


router.route("/create").post((req, res) => {
    const title = req.body.title;
    const newWish = new Wish({
        title
    });

    newWish.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.route("/wish").get((req, res) => {
    Wish.find()
        .then(foundWishes => res.json(foundWishes))
})

router.route("/delete").delete((req, res) => {
    Wish.findOneAndDelete(req.title)
        .then(foundWishes => res.json(foundWishes))
})


module.exports = router;