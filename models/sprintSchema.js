const mongoose = require('mongoose');

const sprintSchema = new mongoose.Schema({
    userID: { type: String, require: true},
    serverID: { type: String, require: true},
    channelID: { type: String, require: true},
    sprint: { type: Date },
    word: {type: Number}
})

const model = mongoose.model('sprintSchema', sprintSchema);

module.exports = model;