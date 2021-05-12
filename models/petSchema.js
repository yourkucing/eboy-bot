const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    userID: { type: String, require: true},
    pet: { type: String },
    petname: { type: String },
    type: {type: String},
    health: { type: Number, default: 10},
    personality: { type: String}
})

const model = mongoose.model('PetModels', PetSchema);

module.exports = model;