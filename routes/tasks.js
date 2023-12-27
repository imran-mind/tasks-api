const {
    createTask,
    updateTask,
    getAllTasks,
    getTaskById,
    deleteTaskById
} = require('../controllers/tasks');

const router = require('express').Router();

router.post('/', createTask);
router.put('/:id', updateTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.delete('/:id', deleteTaskById);

module.exports = router;