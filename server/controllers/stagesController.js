const catchAsync = require('../utils/catchAsync');

exports.getStagesInfo = catchAsync(async (req, res, next) => {
    console.log('This is a stage page');
    res.render('pages/stages/stages');
});
