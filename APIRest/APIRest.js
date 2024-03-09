function DAOList()
{
    this.lists = {};

    this.createList = function(name) 
    {
        var newId ="List" + Object.keys(this.lists).length;

        var newList = {
            id: newId,
            name: name,
            Tasks: [],
            TasksAmount: 0
        }

        this.lists[newId] = newList;

        return {
            success: true,
            message: "List \'" + name + "\' has been created"
        }
    };

    this.renameListName = function(listID, newName) 
    {
        if(this.lists.hasOwnProperty(listID))
        {
            this.lists[listID].name = newName;
            console.log();
        }

        return {
            success: true,
            message: "List has been renamed to \'" + newName + "\'."
        }
    };

    this.excludeList = function(listID)
    {
        if(this.lists.hasOwnProperty(listID))
        {
            var listName = this.lists[listID].name;

            delete this.lists[listID];

            return {
                success: false,
                message: "List can't be found yet"
            }
        }
    };

    this.getList = function()
    {
        return this.lists;
    };

    this.newTask = function(description, listID) 
    {
        var taskId = "Task-" + this.lists[listID].TasksAmount;

        var task = {
            id: taskId,
            about: description,
            finished: false
        }

        this.lists[listID].Tasks.push(task);
        this.lists[listID].TasksAmount += 1;

        return {
            success: true,
            message: "This new Task has been added in this list -> " + "task name: " + this.lists[listID].name
        }
    };

    this.toggleTask = function(listID, taskID) //completa ou não
    {
        for(let i = 0; i < this.lists[listID].Tasks.length; i++)
        {
            if(this.lists[listID].Tasks.id == taskID)
            {
                this.lists[listID].Tasks[i].finished = 
                !this.lists[listID].Tasks[i].finished;

                return {
                    success: true,
                    message: "Task \'" + taskID + "\': " +
                    this.lists[listID].Tasks[i].finished
                };
            }
        }
        return {
            success: false,
            message: "Task \'" + taskID + "\' not found"
        }
    }; 

    this.excludeTask = function(listID, taskID) 
    {
        for(let i = 0; i < this.lists[listID].Tasks.length; i++)
        {
            if(this.lists[listID].Tasks[i].id == taskID)
            {
                this.lists[listID].Tasks.splice(i, 1);
                console.log("DAOList: Task \%s\' excluded with success", taskID);
                break;
            }
        }
    };

    this.getTask = function(listID)
    {
        return this.lists[listID].Tasks;
    };
}

module.exports = new DAOList();
