const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');

const User = mongoose.model('users');
const KEY = require('./server.config');

module.exports = passport => {
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: KEY.secretOfKey
      },
      (jwtPayload, done) => {
        // users.js/payload
        User.findById(jwtPayload.id)
          .then(user => {
            if (user) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch(err => {
            console.log(err);
          });
      }
    )
  );
};