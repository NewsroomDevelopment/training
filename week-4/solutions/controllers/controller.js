const data = require('../data');

module.exports = {
    get_sources: (req, res) => {
        res.json({"message": "OK", data: data.sources});
    },
    add_source: (req, res) => {
        data.sources.push(req.body.source);

        res.json({"message": "OK", data: data.sources});
    },
    remove_source: (req, res) => {
        data.sources = data.sources.filter(source => req.params.id !== source.id);

        res.json({"message": "OK", data: data.sources});
    },
};
