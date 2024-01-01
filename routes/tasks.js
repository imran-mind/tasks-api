const {
    createTask,
    updateTask,
    getAllTasks,
    getTaskById,
    deleteTaskById
} = require('../controllers/tasks');
const validateTask = require('../validation');

const router = require('express').Router();

router.post('/', validateTask, createTask);
router.put('/:id', validateTask, updateTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.delete('/:id', deleteTaskById);

module.exports = router;