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

// GET request to get self
router.get('/', (req, res, next) => {
  res.send(req.user);
});

// POST request to login user
router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
    attributes: { include: ['password_digest'] },
  })
  .then((foundUser) => {
    if (!foundUser) {
      res.sendStatus(401);
    } else {
      return foundUser.authenticate(req.body.password)
        .then((isAuthorized) => {
          if (!isAuthorized) {
            res.sendStatus(401);
          } else {
            req.logIn(foundUser, (err) => {
              if (err) { return next(err); }
              res.status(302).send(foundUser);
            });
          }
        });
    }
  })
  .catch(next);
});

module.exports = router;
