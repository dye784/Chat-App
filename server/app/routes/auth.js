const router = require('express').Router();
const passport = require('passport');
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

// Get self
router.get('/', (req, res, next) => {
  res.send(req.user);
});

module.exports = router;
