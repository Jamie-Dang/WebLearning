const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('./server/models/userModel');

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID, // Your Credentials here.
            clientSecret: process.env.CLIENT_SECRET, // Your Credentials here.
            callbackURL: 'http://localhost:5000/auth/google/callback',
            passReqToCallback: true,
        },
        async (request, accessToken, refreshToken, profile, done) => {
            try {
                // Check if user already exists
                let user = await User.findById(profile.id);

                if (user) {
                    // If user exists, set the session userId and return the user
                    request.session.userId = user._id;
                    return done(null, user);
                } else {
                    // If user doesn't exist, create a new user
                    user = new User({
                        _id: profile.id,
                        username: profile.email,
                        password: '123', // Google sign-in doesn't require a password
                        displayName: profile.displayName,
                    });
                    await user.save();
                    request.session.userId = user._id;
                    return done(null, user);
                }
            } catch (err) {
                return done(err, false);
            }
        },
    ),
);
