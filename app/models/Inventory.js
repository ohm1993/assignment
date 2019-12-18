var mongoose = require('mongoose');
var InventorySchema = new mongoose.Schema({
    product_id : Number,
	product_name : String,
	vendor_name : String,
	mrp : String,
	batch_number : String,
	batch_date : String,
	quantity : String,
	status : String
});
module.exports = mongoose.model('inventory', InventorySchema);