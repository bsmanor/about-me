const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({
    name: String,
    from: Date,
    to: Date
});

module.exports = mongoose.model('Skills', SkillSchema);