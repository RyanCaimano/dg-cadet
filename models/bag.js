const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bagSchema = new Schema({
	bagName: String,
	discs: [
		{
			discName: String,
			weight: Number,
			color: String
		}
	]
});

const Bag = mongoose.model('Bag', bagSchema);

module.exports = Bag;