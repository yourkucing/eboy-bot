const mongoose = require('mongoose');

const timeoutSchema = new mongoose.Schema({
    userID: { type: String, require: true},
    serverID: { type: String, require: true},
    timeout: { type: Number, default: 0}
})

const model = mongoose.model('timeoutSchema', timeoutSchema);

module.exports = model;