const express = require("express");
const router = express.Router();
const Save = require("../models/saveModel");

router.route("/create").post((req, res) => {
    const title = req.body.title;
    const newSave = new Save({
        title
    });

    newSave.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.route("/save").get((req, res) => {
    Save.find()
        .then(foundSave => res.json(foundSave))
})

module.exports = router;