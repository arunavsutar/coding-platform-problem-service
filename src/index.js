const express = require('express');
const { PORT } = require('./config/server.config')
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorhandler');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.get('/ping', (req, res) => {
    return res.json({ message: "Server is Up." });
})


//Last Middleware if any Error comes.
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server Started at Port = ${PORT}`);
});