const data = require('../data');

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    hello_name: (req, res) => {
        res.json({"message": `Hello ${req.params.name}!`});
    },
    todos: (req, res) => {
        res.json({"message": "OK", data: data.todos});
    },
    add_todo: (req, res) => {
        data.todos.push(req.body.todo);

        res.json({"message": "OK"});
    }
};