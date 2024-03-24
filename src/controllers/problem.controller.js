const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
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
    try {
        //Nothing is Implemented Here
        throw NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res) {
    try {
        //Nothing is Implemented Here
        throw NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res) {
    try {
        //Nothing is Implemented Here
        throw NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res) {
    try {
        //Nothing is Implemented Here
        throw NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    controllerPing
}