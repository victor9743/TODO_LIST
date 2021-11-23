var express = require('express');
var rota = express.Router();

var controller = require("../controller/todoList_controller");

rota.get("/issues", controller.listarIssues);
rota.post("/issues", controller.newissue);


module.exports = rota;