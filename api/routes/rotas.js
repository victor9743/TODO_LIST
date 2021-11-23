var express = require('express');
var rota = express.Router();

var controller = require("../controller/todoList_controller");

rota.get("/issues", controller.listarIssues);
rota.get("/issues/:id", controller.buscarIssue);
rota.post("/issues", controller.newIssue);
rota.put('/issues/:id', controller.editarIssue);

module.exports = rota;