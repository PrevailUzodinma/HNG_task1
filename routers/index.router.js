const router = require("express").Router();
const { controller }= require('../controllers/controller');


router.get("/hello", controller);

module.exports = router;