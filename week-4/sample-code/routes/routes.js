const controllers = require('../controllers/controller.js');
const router = require('express').Router();


// There are the routes
// git demo
router.route("/hello").get(controllers.hello);
router.route("/hello/:name").get(controllers.hello_name);
router.route("/todos").get(controllers.todos);
router.route("/add_todo").post(controllers.add_todo);
router.route("/remove_todo/:id").post(controllers.remove_todo);


module.exports = router;
