const mongoose = require('mongoose');

const ghostSchema = new mongoose.Schema({
    serverID: {type: String, require: true},
    userID: {type: String, require: true},
    channelID: {type: String, require: true},
    createdon: {type: Date, require: true}
})

const model = mongoose.model('ghostModels', ghostSchema);

module.exports = model;