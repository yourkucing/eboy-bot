const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    todo: { type: String}
})

const model = mongoose.model('todoSchema', todoSchema);

module.exports = model;