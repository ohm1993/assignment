var express = require('express');
var router = express.Router();
var User = require('./models/User.js');
router.post('/authenticate', function(req, res) {
    User.findOne({ username: req.body.username, password: req.body.password }, function (err, user) {
        if (err) throw err;
         res.json(user);
    });
});
module.exports = router;