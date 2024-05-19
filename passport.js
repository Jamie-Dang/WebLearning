// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.serializeUser((user, done) => {
//     done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.CLIENT_ID,
//             clientSecret: process.env.CLIENT_SECRET,
//             callbackURL: 'http://localhost:5000/auth/google/callback',
//         },
//         (accessToken, refreshToken, profile, done) => {
//             // Process the profile information
//             return done(null, profile);
//         },
//     ),
// );
