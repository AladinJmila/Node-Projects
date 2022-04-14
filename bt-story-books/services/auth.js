module.exports = {
  auth: (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
  },
  guest: (req, res, next) => {
    if (req.isAuthenticated()) return res.redirect('/dashboard');
    next();
  },
};
