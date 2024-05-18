const mongoose = require('mongoose');

const productCategorySchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        slug: {
            type: String,
        },
        ordering: {
            type: Number,
            min: 1,
            default: 1,
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active',
        },
        image: {
            type: String,
            default: 'default.png',
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('ProductCategory', productCategorySchema);
