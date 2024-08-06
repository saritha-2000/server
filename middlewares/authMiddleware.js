const authenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/unauthorized');
};

module.exports = authenticated;
