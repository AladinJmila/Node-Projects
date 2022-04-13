module.exports = (req, res, next) => {
  if (req.isAuthenticated()) return next();

  req.flash('errorMsg', 'Unauthorized');
  res.redirect('/users/login');
};
