var express = require('express');
var router = express.Router();
let controller = require('../Controller/Controller')

/* GET home page. */
router.get('/hello', controller.helloWorld);


module.exports = router;
