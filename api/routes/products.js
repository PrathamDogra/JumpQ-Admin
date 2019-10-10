const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("/", (req, res) => {
  Product.find()
    .then(products => res.status(200).json(products))
    .catch(err => res.status(400).json(err));
});

router.post("/add", (req, res) => {
  const storename = req.body.storename;
  const productname = req.body.productname;

  const quantity = Number(req.body.quantity);
  const date = Date.parse(req.body.date);
  const newProduct = new Product({
    storename,
    productname,
    quantity,
    date
  });
  newProduct
    .save()
    .then(() => res.status(200).json("Product Added"))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => {
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product Deleted"))
    .catch(err => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id)
    .then(product => {
      product.storename = req.body.storename;
      product.productname = req.body.productname;
      product.quantity = Number(req.body.quantity);
      product.date = Date.parse(req.body.date);

      product
        .save()
        .then(() => res.json("Product is updated"))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});
module.exports = router;
