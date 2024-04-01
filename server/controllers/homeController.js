const catchAsync = require('../utils/catchAsync');
const ProductCategory = require('../models/productCategoryModel');
const ProductModel = require('../models/productModel');

exports.getHomePage = catchAsync(async (req, res, next) => {
    const data = await ProductCategory.find();
    const productData = await ProductModel.find().limit(3);
    res.render('pages/home/index', { data, productData });
});
