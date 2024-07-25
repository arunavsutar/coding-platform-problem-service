const winston = require('winston');
require('winston-mongodb');
const { LOG_DB_URl } = require("./server.config");
const allowedTransports = [];

//The below transport configuration enables logging on the console.
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(

        winston.format.colorize(),
        //First argument = Time stamp of the execution
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        //This second arguments define what actually going to be printed
        winston.format.printf((log) => `${log.timestamp}[${log.level}]:${log.message}`)
    )
}));

//The below transport configuration enables logging on the MongoDB Database.
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URl,
    collection: 'logs'
}));

//The below transport configuration enables logging on the file.
allowedTransports.push(new winston.transports.File({
    filename:`app.log`
}));


const logger = winston.createLogger({
    format: winston.format.combine(
        //First argument = Time stamp of the execution
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        //This second arguments define what actually going to be printed
        winston.format.printf((log) => `${log.timestamp}[${log.level.toUpperCase()}]:${log.message}`)
    ),
    transports: allowedTransports
});

module.exports = logger;