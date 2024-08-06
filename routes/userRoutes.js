const express = require('express');
const router = express.Router();
const authenticated = require('../middlewares/authMiddleware');

router.get('/user-details', authenticated, (req, res) => {
    res.json({
        id: req.user.id,
        googleId: req.user.googleId,
        displayName: req.user.displayName,
        email: req.user.email,
    });
});
module.exports = router;
