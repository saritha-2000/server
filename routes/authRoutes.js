const express = require('express');
const passport = require('passport');
const router = express.Router();
require('dotenv').config();

const fe_base_url = process.env.FRONTEND_BASE_URL
// auth handler
router.get('/google', passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }));

// callback
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: `${fe_base_url}/login`}),
    (req, res) => {
        res.redirect(fe_base_url);
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
