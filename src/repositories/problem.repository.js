const { Problem } = require("../models");
const NotFoundError = require("../errors/notfound.error");
const logger = require("../config/logger.config");

class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            })
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            console.log(problem);
            if (!problem) {
                throw new NotFoundError("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if (!deletedProblem) {
                logger.error(`Problem with id : ${id} not found in the db`)
                throw new NotFoundError("problem", id);
            }
            return deletedProblem;
        } catch (error) {
            throw error;
        }
    }
    async updateProblem(id, updatedData) {
        try {
            const updatedProblem = await Problem.findOneAndUpdate({ _id: id }, updatedData, { new: true });
            if (!updatedProblem) {
                throw new NotFoundError("Problem", id);
            }
            return updatedProblem;
        } catch (error) {
            throw error
        }
    }
}


module.exports = ProblemRepository;