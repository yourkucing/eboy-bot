const mongoose = require('mongoose');

const reactionsSchema = new mongoose.Schema({
    serverID: { type: String, require: true},
    channelID: { type: String, require: true},
    messageID: { type: String },
    emoji: { type: String },
    role: {type: String}
})

const model = mongoose.model('reactionsSchema', reactionsSchema);

module.exports = model;