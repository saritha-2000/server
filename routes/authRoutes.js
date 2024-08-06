const express = require('express');
const passport = require('passport');
const router = express.Router();

// auth handler
router.get('/google', passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }));

// callback
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: 'https://book-manager-teal.vercel.app/login' }),
    (req, res) => {
        res.redirect('https://book-manager-teal.vercel.app/');
    }
);

// Unauthorized route
router.get('/unauthorized', (req, res) => {
    res.status(403).send('You are not authorized to access this application.');
});

// session destroy
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.clearCookie('connect.sid');
        });
    });
});

module.exports = router;
