const mongoose = require('mongoose');

const birthdaySchema = new mongoose.Schema({
    serverID: {type: String, require: true, unique: true},
    userID: {type: String, require: true},
    birthday: {type: Date, require: true}
})

const model = mongoose.model('birthdayModels', birthdaySchema);

module.exports = model;