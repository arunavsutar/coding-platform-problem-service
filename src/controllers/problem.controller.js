const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const errorHandler = require('../utils/errorhandler');
function controllerPing(req, res) {
    return res.json({ message: "Controller Ping is UP." });
}


function addProblem(req, res, next) {
    try {
        //Nothing is Implemented Here
        throw NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented."
    });
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented."
    });
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented."
    });
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented."
    });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    controllerPing
}