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

        res.json({"message": "OK", data: data.todos});
    },
    remove_todo: (req, res) => {
        data.todos = data.todos.filter(todo => parseInt(req.params.id) !== todo.id);

        console.log(req.params.id);
        console.log(data.todos);

        res.json({"message": "OK", data: data.todos});
    }
};
