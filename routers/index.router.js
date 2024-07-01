const router = require("express").Router();
const { controller, home }= require('../controllers/controller');

router.get("/", home);
router.get("/hello", controller);

module.exports = router;