const successGoogleLogin = (req, res) => {
    if (!req.user) res.redirect('/failure');
    console.log(req.user);
    req.session.userId = req.user._id;
    res.redirect('/');
};

const failureGoogleLogin = (req, res) => {
    res.send('Error');
};

module.exports = {
    successGoogleLogin,
    failureGoogleLogin,
};
