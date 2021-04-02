const data = require('../data');
const todos = require('../models/ToDoModel');

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    hello_name: (req, res) => {
        res.json({"message": `Hello ${req.params.name}!`});
    },
    todos: (req, res) => {
        todos.find({})
        .then(todoData => {
            console.log(todoData);
            res.json({"message": "OK", data: todoData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    add_todo: (req, res) => {
        todos.create(req.body.todo)
        .then(todoData => {
            console.log(todoData);
            res.json({"message": "OK", data: todoData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    remove_todo: (req, res) => {
        todos.findOneAndDelete(req.params.id)
        .then(todoData => {
            console.log(todoData);
            res.json({"message": "OK", data: todoData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },
};
