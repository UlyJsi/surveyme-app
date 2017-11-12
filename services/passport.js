const passport = require("passport"); // assign && "download" PassportJS
const GoogleStrategy = require("passport-google-oauth20").Strategy; // strategy google-auth (www.passportjs.com)
const mongoose = require("mongoose");
const keys = require("../config/keys"); // assign && "download" secure info

const User = mongoose.model("users"); //class?

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback" // server -> browser
    },
    (accessToken, refreshToken, profile, done) => {
      // callback from google, redirecting
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // have already record with profile.id
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save() // don't have already record with profile.id
            .then(user => done(null, user));
        }
      });
    }
  )
);
