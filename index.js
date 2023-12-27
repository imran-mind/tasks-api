const express = require('express');
const connectToDB = require('./db');
const notFound = require('./middlewares/notFound');
require('dotenv').config();
const taskRoutes = require('./routes/tasks');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const PORT = process.env.PORT || 8080;

const cors = require('cors');

// Enable CORS for all routes
app.use(cors());
//which helps to allow req.body in POST and PUT api
app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('Hello World');
})

app.use('/api/v1/tasks', taskRoutes);
// not found middleware
app.use(notFound);
// Error handling middleware
// app.use(errorHandlerMiddleware);
// we should not send err object directly to client 
// because it has lot server side sensitive information
// which we don't want to expose.
// so we should resolve it properly
app.use(errorHandler)

const start = async () => {
    await connectToDB();
    app.listen(PORT, () => {
        console.log(`Server is up and running on ${PORT}`);
    })
}

start();
