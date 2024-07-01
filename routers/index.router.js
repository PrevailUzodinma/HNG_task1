const router = require("express").Router();
const controller = require('../controllers/controller.js');


router.use("/hello", controller);

module.exports = router;