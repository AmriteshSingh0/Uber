const mongoose = require('mongoose');
const { connect } = require('mongoose');


function connectToDb(){
	mongoose.connect(process.env.DB_CONNECT)
		.then(() => console.log('CONNECTED TO DB'))
		.catch(err => console.error('DB connection error:', err));
}

module.exports = connectToDb;