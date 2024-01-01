const joi = require('joi');
const CustomError = require('./errors/CustomError');

const TaskSchema = joi.object({
    name: joi.string().min(3).max(20).required(),
    isCompleted: joi.boolean().optional(),
    _id: joi.string().optional()
}).unknown(true);

const validateTask = async (req, res, next) => {
    try {
        const body = req.body;
        const result = await TaskSchema.validateAsync(body);
        console.log('---result--', result);
        if (result.error) {
            const err = new CustomError(result.error, 400);
            return next(err);
        }
        next();
    } catch (err) {
        console.log('--catch--', err);
        const error = new CustomError(err, 400);
        return next(error);
    }
}

module.exports = validateTask;