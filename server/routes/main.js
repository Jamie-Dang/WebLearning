const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const passport = require('passport');

/**
 * GET /
 * Routes - Home
 */
router.get('', homeController.getHomePage);

// Routes - Courses
router.use('/courses', require('./courseRoutes'));

// Routes - Login
router.use('/login', require('./loginRoutes'));

// Routes - Register
router.use('/register', require('./registerRoutes'));

// Routes - Login
router.use('/logout', require('./logoutRoutes'));

// Router - Not Found (not existed!)
router.use((req, res) => res.render('pages/notFound/notFound'));

// Test
// router.post(
//     '/login/login',
//     passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: '/login',
//     }),
// );

// const ProductCateModel = require('../models/productCategoryModel');
// function insertProductData() {
//     ProductCateModel.insertMany([
//         {
//             name: 'Software Engineering',
//             slug: 'software-engineering',
//             image: 'https://eduport.webestica.com/assets/images/element/online.svg',
//         },
//         {
//             name: 'Data Science',
//             slug: 'data-science',
//             image: 'https://eduport.webestica.com/assets/images/element/data-science.svg',
//         },
//         {
//             name: 'Engineering',
//             slug: 'engineering',
//             image: 'https://eduport.webestica.com/assets/images/element/engineering.svg',
//         },
//         {
//             name: 'Web Development',
//             slug: 'web-development',
//             image: 'https://eduport.webestica.com/assets/images/element/coding.svg',
//         },
//     ]);
// }
// insertProductData();
module.exports = router;
