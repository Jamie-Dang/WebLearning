const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const courseController = require('../controllers/courseController');

/**
 * GET /
 * Routes - Home
 */
router.get('', homeController.getHomePage);

// Routes - Courses
router.get('/courses', (req, res) => {
    res.render('pages/courses/courses');
});

// function insertProductData() {
//     ProductModel.insertMany([
//         {
//             name: 'Operating Systems',
//             slug: 'software-engineering',
//             image: './img/image-course.png',
//             price: 12.99,
//             time: '02 hours 5 minutes',
//             description: 'For software engineer',
//         },
//         {
//             name: 'Net Working',
//             slug: 'net-working',
//             image: './img/image-course.png',
//             price: 5.99,
//             time: '01 hours 5 minutes',
//             description: 'For net working',
//         },
//         {
//             name: 'Big Data',
//             slug: 'big-date',
//             image: './img/image-course.png',
//             price: 20.1,
//             time: '02 hours 5 minutes',
//             description: 'For big data',
//         },
//         {
//             name: 'Artificial Intelligence',
//             slug: 'artificial-intelligence',
//             image: './img/image-course.png',
//             price: 19.99,
//             time: '03 hours 5 minutes',
//             description: 'For artificial intelligence',
//         },
//     ]);
// }
// insertProductData();
module.exports = router;
