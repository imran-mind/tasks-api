const BadRequestError = require("../errors/BadRequestError");
const CustomError = require("../errors/CustomError");
const { serverError } = require("../errors/serverError");
const Task = require("../models/Task");
const { okResponse } = require("../utils");

const createTask = async (req, res, next) => {
    const { name, isCompleted } = req.body;
    try {
        if (!name) {
            throw new CustomError('Bad request, Task name is required ', 400);
        }
        const task = new Task({ name, isCompleted });
        await task.save();
        return okResponse(res, 201, 'created');
    } catch (err) {
        console.log(Object.keys(err.errors).length);
        if (Object.keys(err?.errors).length) {
            console.log(err.errors);
            const error = new CustomError(err, 400);
            return next(error);
        }
        return next(err);
    }
};


const updateTask = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
        const updateDoc = { $set: { ...body, updatedAt: Date.now() } };
        await Task.findByIdAndUpdate(id, updateDoc);
        return okResponse(res, 200, 'success');
    } catch (err) {
        if (Object.keys(err?.errors).length) {
            console.log(err.errors);
            const error = new CustomError(err, 400);
            return next(error);
        }
        return next(err);
    }
}
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}, { createdAt: 0, updatedAt: 0 });
        return okResponse(res, 200, 'success', tasks);
    } catch (err) {
        return next(err);
    }
}

const getTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id, { _id: 0, createdAt: 0, updatedAt: 0 });
        return okResponse(res, 200, 'success', task);
    } catch (err) {
        return next(err);
    }
}

const deleteTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        await Task.findByIdAndDelete(id);
        return okResponse(res, 200, 'success');
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    createTask,
    updateTask,
    getAllTasks,
    getTaskById,
    deleteTaskById
}