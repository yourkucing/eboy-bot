const mongoose = require('mongoose');

const cookieSchema = new mongoose.Schema({
    userID: {type: String, require: true, unique: true},
    cookie: {type: Number, default: 0}
})

const model = mongoose.model('cookieModels', cookieSchema);

module.exports = model;