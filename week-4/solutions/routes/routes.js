const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/sources").get(controllers.get_sources);
router.route("/add_source").post(controllers.add_source);
router.route("/remove_source/:id").post(controllers.remove_source);


module.exports = router;
