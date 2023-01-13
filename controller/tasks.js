const Task = require("../models/task");

async function getAllTasks(req,res){
    try {
        const tasks = await Task.find({});
        res.status(200).send({tasks})
    } catch (error) {
        res.status(500).json({msg : error});
    }
}

async function createTask(req,res){
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

async function getOneTask(req,res){
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id : taskID});
        if(!task){
            return res.status(404).json({msg:`no task with id: ${taskID}`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg : error})
    }
}


async function deleteOneTask(req,res){
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`no task with id: ${taskID}`});
        }
        res.status(200).send();
    } catch (error) {
        res.status(500).json({msg : error});
    }
}

async function updateOneTask(req,res){
    try {
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        });
        if(!task){
            return res.status(404).json({msg:`no task with id: ${taskID}`});
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg : error});
    }
}
module.exports ={ 
    getAllTasks,
    createTask,
    getOneTask,
    updateOneTask,
    deleteOneTask
}