const mongoose = require('mongoose');

const moneySchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    gold: { type: Number, default: 50}
})

const model = mongoose.model('MoneyModels', moneySchema);

module.exports = model;