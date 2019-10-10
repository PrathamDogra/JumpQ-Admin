const express = require("express");
const router = express.Router();
const Store = require("../models/store.model");

router.get("/", (req, res) => {
  Store.find()
    .then(stores => res.status(200).json(stores))
    .catch(err => res.status(400).json(err));
});
router.post("/add", (req, res) => {
  const storename = req.body.storename;

  const newStore = new Product({ storename });
  newStore
    .save()
    .then(() => res.json("Store added"))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
