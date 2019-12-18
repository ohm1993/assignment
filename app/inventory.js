var express = require('express');
var router = express.Router();
var Inventory = require('./models/Inventory.js');
router.post('/add', function(req, res) {
    Inventory.create(req.body, function (err, inventory) {
        if (err) throw err;
        res.json(inventory);
    });
});
router.get('/inventorylist', function(req, res) {
    Inventory.find({}, function(err, inventories) {
        if (err) throw err;
        res.json(inventories);
    });
});
router.get('/:id', function(req, res) {
    Inventory.findOne({'_id': req.params.id}, function (err, inventory) {
      if (err) throw err;
       res.json(inventory);
    });
});
/* UPDATE INVENTORY */
router.put('/update/:id', function(req, res) {
    console.log("req body value is",req.body);
    Inventory.findOneAndUpdate({'_id': req.params.id}, req.body, function (err, inventory) {
       if (err) throw err;
       res.json(inventory);
    });
});
router.delete('/:id', function(req, res) {
    Inventory.findOneAndRemove({'_id' : req.params.id}, function (err, inventory){
        if (err) return next(err);
        res.json(inventory);
    });
});
module.exports = router;    