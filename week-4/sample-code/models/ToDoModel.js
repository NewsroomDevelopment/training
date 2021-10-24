const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    userId: { type: String, required: true },
    id: { type: String, required: true},
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

const todos = mongoose.model('todo_list', toDoSchema);

module.exports = todos;
