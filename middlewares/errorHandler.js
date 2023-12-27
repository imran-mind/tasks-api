const CustomError = require("../errors/customError");

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        // 400 - Bad request,
        // 401 - Unauthorized
        // 403 - Forbidden
        // 409 - Conflict
        const { status, message } = err;
        return res.status(status)
            .json({ message, status });
    }
    return res.status(500)
        .json({ message: 'Something went wrong,please try again...' });
}
module.exports = errorHandler;
