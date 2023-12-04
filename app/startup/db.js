const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:password@mongodb:27017/user_profile?authSource=admin');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});