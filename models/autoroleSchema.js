const mongoose = require('mongoose');

const autoroleSchema = new mongoose.Schema({
    serverID: {type: String, require: true},
    roleID: {type: String, require: true}
})

const model = mongoose.model('autoroleModels', autoroleSchema);

module.exports = model;