const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../model/user');

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => done(null, user))
  .catch(done);
});

// Set up Auth Local strategy
passport.use(new LocalStrategy((email, password, done) => {
  User.findOne({
    where: { email },
  })
  .then((foundUser) => {
    if (!foundUser) {
      return done(null, false, { message: 'Login incorrect' });
    }

    return foundUser.authenticate(password)
      .then((isAuthorized) => {
        if (!isAuthorized) {
          return done(null, false, { message: 'Login incorrect' });
        }
        done(null, foundUser);
      });
  })
  .catch(done);
}));

// GET request to get self
router.get('/', (req, res, next) => {
  res.send(req.user);
});

// POST request for Local Login
router.post('/login', passport.authenticate('local', { successRedirect: '/' }));

module.exports = router;
