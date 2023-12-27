const mongoose = require('mongoose');
const CustomError = require('../errors/customError');

const TaskModel = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide task name'],
        trim: true,
        maxLength: [20, 'name can not be more than 20 characters']
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}, { versionKey: false });

module.exports = mongoose.model('task', TaskModel);