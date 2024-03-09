//modules
var bodyParser = require("body-parser");
var DAOList = require("./APIRest");
var express = require("express");

var app = express();
app.use(bodyParser.json());

app.post("/list", function(request, response)
{
    var name = request.body.name;
    var result = DAOList.createList(name)

    console.log(result);
    response.status(200);
    response.json(result);
    response.end();
});

app.put("/list/:id_list", function(request, response)
{
    var newName = request.body.name;
    var listID = request.params.id_list;

    var result = DAOList.renameListName(listID, newName);
    response.status(200);
    response.json(result);
    response.end();
});

app.delete("/list/:id_list", function(request, response)
{
    var listId = request.params.id_list;
    var result = DAOList.excludeList(listId);

    response.status(200);
    response.json(result);
    response.end();
});

app.get("/list", function(request, response)
{
    response.status(200);
    response.json(DAOList.getList());
    response.end();
});

app.post("list/:id_list", function(request, response)
{
    var listID = request.params.id_list;
    var taskDescription = request.body.taskDescription;

    var result = DAOList.newTask(taskDescription, listID);
    response.status(200);
    response.json(result);
    response.end();
});

app.put("/list/:id_list/task/:task_id", function(request, response)
{
    var listID = request.params.id_list;
    var taskID = request.params.task_id;

    var result = DAOList.toggleTask(listID, taskID);
    response.status(200);
    response.json(result);
    response.end();
});

app.delete("/list/:list_id/task", function(request, response)
{
    var listID = request.params.list_id;
    var taskID = request.params.task_id;

    var result = DAOList.excludeTask(listID, taskID);
    response.status(200);
    response.json(result);
    response.end();
});

app.get("/list/:list_id/task", function(request, response)
{
    var listID = request.params.list_id;
    console.log(request);
    response.status(200);
    console.log(response.json(DAOList.getTask(listID)));
    response.end();
});

app.listen(8080);