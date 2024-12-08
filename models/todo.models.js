const { model , Schema } = require("mongoose");

const todoSchema = new Schema({
    toDoTitle: {
        type: String,
        required: true
    },
    toDoDesc: {
        type: String,
        required: true
    }
});


module.exports = model('todos', todoSchema);