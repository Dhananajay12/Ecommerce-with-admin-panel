const Product = require("../model/ProductSchema");

const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

const getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    product,
  });
};

const updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({
      success: false,
      message: "product not fouund with  this id",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnfied: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

const deleteProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({
      success: false,
      message: "product not fouund with  this id",
    });
  }
  await Product.deleteOne();

  res.status(200).json({
    success: true,
    message: "product delete successfully",
  });
};

const getSingleProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({
      success: false,
      message: "product not fouund with  this id",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
};
