const router = require("express").Router();
const { controller, home }= require('../controllers/controller');

router.get("/hello", controller);

module.exports = {router, home};