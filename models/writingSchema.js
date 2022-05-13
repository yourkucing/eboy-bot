const mongoose = require('mongoose');

const writingSchema = new mongoose.Schema({
    serverID: {type: String, require: true},
    userID: {type: String, require: true},
    wordcount: {type: Number, require: true, default: 0}
})

const model = mongoose.model('writingModels', writingSchema);

module.exports = model;