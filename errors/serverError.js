
const serverError = (res, err) => {
    return res.status(500)
        .json({ message: "Internal Server error", err });
}

module.exports = {
    serverError
}