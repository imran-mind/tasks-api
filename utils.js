
const okResponse = (res, statusCode, msg, data) => {
    return res.status(statusCode)
        .json({ message: msg, data, status: statusCode });
}

module.exports = {
    okResponse
}