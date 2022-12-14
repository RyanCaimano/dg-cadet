const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/discs', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

const mainRoutes = require('./routes/main');

app.use(mainRoutes);

app.listen(3000, () => {
	console.log('Node.js listening on port ' + 3000);
});