const mongoose = require('mongoose');

const timeoutSchema = new mongoose.Schema({
    userID: { type: String, require: true},
    serverID: { type: String, require: true},
    channelID: { type: String, require: true},
    timeout: { type: Date}
})

const model = mongoose.model('timeoutSchema', timeoutSchema);

module.exports = model;