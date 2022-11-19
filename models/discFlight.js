const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discFlightSchema = new Schema({
	name: String,
	speed: Number,
	glide: Number,
	turn: Number,
	fade: Number,
});

const DiscFlight = mongoose.model('DiscFlight', discFlightSchema);

module.exports = DiscFlight;
