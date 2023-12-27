
const okResponse = (res, statusCode, msg, data) => {
    return res.status(statusCode)
        .json({ message: msg, data });
}

module.exports = {
    okResponse
}