const ProductModel = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');

// Danh sách khóa học
exports.getAllCourses = catchAsync(async (req, res, next) => {
    const productData = await ProductModel.find();

    res.render('pages/courses/courses', {
        title: 'Danh sách sản phẩm',
        productData,
    });
});

// Danh sách chi tiết khóa học
exports.getCourse = catchAsync(async (req, res, next) => {
    try {
        // Render view mà không cần truyền dữ liệu từ cơ sở dữ liệu
        res.render('pages/course/course');
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error(error);
        res.status(500).send('An error occurred while rendering the course view.');
    }
});

// // Chi tiết khóa học
// exports.getProduct = catchAsync(async (req, res, next) => {
//     const { slug } = req.params;
//     const { id } = req.query;

//     const productQuery = id ? { _id: id } : { slug };
//     const productPromise = productService.getOneWithPopulates(productQuery);

//     const relatedProductsPromise = productService.getRelatedProducts(id, slug);

//     const [product, relatedProducts] = await Promise.all([
//       productPromise,
//       relatedProductsPromise,
//     ]);

//     if (!product) {
//       return next(new AppError(404, "Không tìm thấy sản phẩm"));
//     }

//     res.render("frontend/pages/product/index", {
//       title: product.name,
//       product,
//       relatedProducts,
//     });
//   });
