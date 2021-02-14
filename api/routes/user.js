var express = require('express');
var router = express.Router();
var genFunctions = require('../utility/genFunctions');

router.post("/", (req, res) => {
});

router.get('/', function (req, res, next) {
    genFunctions.sendResponse(null, req, res, "Get API for User Collection");
});

module.exports = function (app) {
    app.use("/api/user", router);
};